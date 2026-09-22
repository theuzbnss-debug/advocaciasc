// Número móvel publicado no site WordPress atual da Advocacia SC.
const WHATSAPP_NUMBER = "5547997714202";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const heroVideo = document.querySelector("[data-hero-video]");

body.classList.add("motion-enabled");

function closeMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  mobileMenu.hidden = true;
}

menuButton?.addEventListener("click", () => {
  const opening = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.setAttribute("aria-label", opening ? "Fechar menu" : "Abrir menu");
  mobileMenu.hidden = !opening;
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

let lastScrollY = window.scrollY;
let headerFrame = 0;

function updateHeader() {
  const currentScrollY = window.scrollY;
  const menuIsOpen = mobileMenu ? !mobileMenu.hidden : false;
  header?.classList.toggle("is-scrolled", currentScrollY > 24);
  header?.classList.toggle("is-hidden", currentScrollY > lastScrollY && currentScrollY > 180 && !menuIsOpen);
  lastScrollY = currentScrollY;
  headerFrame = 0;
}

window.addEventListener("scroll", () => {
  body.classList.add("has-user-scrolled");
  if (headerFrame) return;
  headerFrame = window.requestAnimationFrame(updateHeader);
}, { passive: true });

updateHeader();

function syncHeroVideo() {
  if (!heroVideo) return;
  if (reducedMotion.matches) heroVideo.pause();
  else heroVideo.play().catch(() => {});
}

syncHeroVideo();
reducedMotion.addEventListener?.("change", syncHeroVideo);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll(".section-label, [data-reveal]").forEach((element) => {
  if (element.getBoundingClientRect().top < window.innerHeight) element.classList.add("is-visible");
  else revealObserver.observe(element);
});

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting));
}, { rootMargin: "-42% 0px -42% 0px", threshold: 0 });

document.querySelectorAll("[data-timeline-item]").forEach((item) => timelineObserver.observe(item));

const themeObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) body.dataset.pageTheme = visible.target.dataset.theme;
}, { threshold: [0.25, 0.55] });

document.querySelectorAll("[data-theme]").forEach((section) => themeObserver.observe(section));

const expertiseRail = document.querySelector(".expertise-rail");
if (expertiseRail) {
  const expertiseObserver = new IntersectionObserver((entries) => {
    const railEntry = entries[0];
    if (railEntry.isIntersecting && body.classList.contains("has-user-scrolled")) {
      expertiseRail.classList.add("is-active");
      expertiseObserver.disconnect();
    }
  }, { threshold: 0.35 });
  expertiseObserver.observe(expertiseRail);
}

const form = document.querySelector("#booking-form");

if (form) {
  const nameInput = form.querySelector("#booking-name");
  const subjectSelect = form.querySelector("#booking-subject");
  const otherWrap = form.querySelector("#other-subject");
  const detailsInput = form.querySelector("#booking-details");
  const detailsCount = form.querySelector("#details-count");
  const submitButton = form.querySelector(".booking-submit");
  const status = form.querySelector("#form-status");

  function setError(field, message) {
    const error = form.querySelector(`#${field}-error`);
    if (error) error.textContent = message;
  }

  function clearError(field, input) {
    setError(field, "");
    input?.removeAttribute("aria-invalid");
  }

  function invalidate(field, input, message) {
    setError(field, message);
    input?.setAttribute("aria-invalid", "true");
    input?.focus();
    return false;
  }

  subjectSelect.addEventListener("change", () => {
    clearError("subject", subjectSelect);
    const showDetails = subjectSelect.value === "Outro assunto";
    otherWrap.classList.toggle("is-open", showDetails);
    otherWrap.inert = !showDetails;
    detailsInput.required = showDetails;
    if (showDetails) window.requestAnimationFrame(() => detailsInput.focus());
    else {
      detailsInput.value = "";
      detailsCount.textContent = "0/300";
      clearError("details", detailsInput);
    }
  });

  detailsInput.addEventListener("input", () => {
    detailsCount.textContent = `${detailsInput.value.length}/300`;
    clearError("details", detailsInput);
  });

  nameInput.addEventListener("input", () => clearError("name", nameInput));
  form.querySelectorAll('input[name="mode"]').forEach((input) => input.addEventListener("change", () => clearError("mode")));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";

    const name = nameInput.value.trim();
    const subject = subjectSelect.value;
    const mode = form.querySelector('input[name="mode"]:checked');

    if (!name) return invalidate("name", nameInput, "Informe seu nome.");
    if (!subject) return invalidate("subject", subjectSelect, "Escolha um assunto.");
    if (subject === "Outro assunto" && !detailsInput.value.trim()) return invalidate("details", detailsInput, "Descreva brevemente o assunto.");
    if (!mode) return invalidate("mode", form.querySelector('input[name="mode"]'), "Escolha a modalidade.");
    const lines = [
      "Olá, gostaria de solicitar um atendimento.",
      `Nome: ${name}`,
      `Assunto: ${subject}`,
      subject === "Outro assunto" ? `Detalhes: ${detailsInput.value.trim()}` : "",
      `Modalidade: ${mode.value}`,
      "Gostaria de combinar a data e o horário com a equipe.",
      "Estou ciente de que o atendimento será confirmado após a resposta da equipe.",
    ].filter(Boolean);

    submitButton.disabled = true;
    submitButton.textContent = "Abrindo o WhatsApp…";
    status.textContent = "Preparando sua mensagem. Nenhum dado foi salvo no site.";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");

    window.setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar pelo WhatsApp";
    }, 1500);
  });
}
