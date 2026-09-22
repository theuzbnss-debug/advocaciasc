import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bank,
  Buildings,
  CheckCircle,
  Clock,
  Farm,
  HouseLine,
  InstagramLogo,
  List,
  MapPin,
  Phone,
  Scales,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";

const practices = [
  {
    title: "Direito Bancário",
    summary: "Contratos, juros, cobranças e operações financeiras.",
    detail:
      "Análise jurídica de empréstimos, financiamentos, cheque especial, cartão de crédito, tarifas e cobranças não reconhecidas.",
    icon: Bank,
  },
  {
    title: "Direito Tributário",
    summary: "Orientação para empresas, municípios e contribuintes.",
    detail:
      "Atuação consultiva e contenciosa em questões tributárias, com leitura técnica e visão administrativa.",
    icon: Scales,
  },
  {
    title: "Recuperação Judicial",
    summary: "Estratégia jurídica para empresas em cenários de crise.",
    detail:
      "Avaliação do cenário empresarial e acompanhamento jurídico do processo de reorganização e negociação com credores.",
    icon: Buildings,
  },
  {
    title: "Agronegócio",
    summary: "Revisão de contratos e financiamentos rurais.",
    detail:
      "Análise de operações bancárias e obrigações financeiras relacionadas à atividade rural e ao crédito do produtor.",
    icon: Farm,
  },
  {
    title: "Direito Imobiliário",
    summary: "Contratos e atraso na entrega de imóveis.",
    detail:
      "Orientação em questões contratuais, especialmente em situações envolvendo imóvel adquirido na planta.",
    icon: HouseLine,
  },
];

const marqueeItems = [
  "Direito Bancário",
  "Tributário",
  "Empresarial",
  "Agronegócio",
  "Imobiliário",
  "Consumidor",
];

const credentials = [
  "Administrador de empresas",
  "Ex-juiz leigo no Juizado Especial Cível de Curitiba",
  "Coordenador do Colegiado de Tributação da AMMVI",
  "Membro da Comissão de Direito Tributário da OAB/Blumenau",
  "Advogado da Associação dos Municípios do Médio Vale do Itajaí",
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#inicio" aria-label="Advocacia SC — início">
      <span className="brand__mark">
        <img src="/assets/simbolo-advocacia-sc.png" alt="" />
      </span>
      <span className="brand__type">
        <strong>Advocacia SC</strong>
        <small>Alexandre Carvalho Brígido</small>
      </span>
    </a>
  );
}

function ArrowIcon() {
  return <ArrowRight aria-hidden="true" weight="thin" />;
}

function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("modal-open");
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        tabIndex="-1"
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar">
          <X weight="thin" />
        </button>
        {!submitted ? (
          <>
            <p className="section-label">Primeiro contato</p>
            <h2 id="contact-title">Agende um atendimento.</h2>
            <p className="modal-copy">
              Conte brevemente qual área melhor representa sua necessidade. A equipe retornará dentro do horário de atendimento.
            </p>
            <form onSubmit={submit}>
              <label>
                Nome
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                WhatsApp
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                Área de interesse
                <select name="area" defaultValue="">
                  <option value="" disabled>Selecione uma área</option>
                  {practices.map((practice) => (
                    <option key={practice.title}>{practice.title}</option>
                  ))}
                  <option>Outra questão</option>
                </select>
              </label>
              <button className="button button--gold button--full" type="submit">
                Solicitar contato <ArrowIcon />
              </button>
            </form>
            <a className="whatsapp-direct" href="https://wa.me/554732855741" target="_blank" rel="noreferrer">
              <WhatsappLogo weight="thin" /> Falar diretamente pelo WhatsApp
            </a>
          </>
        ) : (
          <div className="success-state" role="status">
            <CheckCircle weight="thin" />
            <p className="section-label">Solicitação registrada</p>
            <h2>Obrigado pelo contato.</h2>
            <p>A equipe poderá retornar de segunda a sexta, das 8h às 18h.</p>
            <button className="button button--outline" type="button" onClick={onClose}>Voltar ao site</button>
          </div>
        )}
      </section>
    </div>
  );
}

function Intro({ onDone }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onDone, reduced ? 180 : 2500);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__center">
        <img className="intro__mark" src="/assets/simbolo-advocacia-sc.png" alt="" />
        <div className="intro__line" />
        <p className="intro__name">Alexandre Carvalho Brígido</p>
        <span className="intro__caption">Advocacia SC</span>
      </div>
      <div className="intro__panel intro__panel--left" />
      <div className="intro__panel intro__panel--right" />
    </div>
  );
}

export function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activePractice, setActivePractice] = useState(0);
  const heroRef = useRef(null);
  useReveal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const offset = Math.min(window.scrollY * 0.12, 70);
      heroRef.current?.style.setProperty("--parallax", `${offset}px`);
      document.querySelectorAll("[data-parallax]").forEach((node) => {
        const rect = node.getBoundingClientRect();
        const drift = Math.max(-36, Math.min(36, (rect.top - window.innerHeight / 2) * -0.035));
        node.style.setProperty("--image-drift", `${drift}px`);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openContact = () => {
    setMenuOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      {introVisible && <Intro onDone={() => setIntroVisible(false)} />}
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#atuacao">Atuação</a>
          <a href="#sobre">Sobre</a>
          <a href="#conteudos">Conteúdos</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="header-cta" type="button" onClick={openContact}>
          Agendar atendimento <ArrowIcon />
        </button>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu" aria-expanded={menuOpen}>
          {menuOpen ? <X weight="thin" /> : <List weight="thin" />}
        </button>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#atuacao" onClick={() => setMenuOpen(false)}>Atuação</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#conteudos" onClick={() => setMenuOpen(false)}>Conteúdos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <button type="button" onClick={openContact}>Agendar atendimento</button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" ref={heroRef}>
          <div className="hero__texture" />
          <div className="hero__copy">
            <p className="eyebrow">Estratégia, clareza e responsabilidade</p>
            <h1>Experiência jurídica para <em>decisões complexas.</em></h1>
            <p className="hero__description">
              Atuação técnica em questões bancárias, tributárias, empresariais e patrimoniais.
            </p>
            <p className="hero__proof">Alexandre Carvalho Brígido <span /> Mais de 20 anos de atuação</p>
            <button className="button button--outline hero__button" type="button" onClick={openContact}>
              Agendar atendimento <ArrowIcon />
            </button>
            <a className="scroll-cue" href="#atuacao">
              <span>↓</span> Role para conhecer
            </a>
          </div>
          <div className="hero__portrait" data-parallax aria-label="Alexandre Carvalho Brígido em seu escritório">
            <img src="/assets/alexandre-retrato-escritorio.jpg" alt="Alexandre Carvalho Brígido, advogado" />
          </div>
          <div className="hero__side-note" aria-hidden="true">
            <span>Direito</span><span>Estratégia</span><span>Responsabilidade</span>
          </div>
        </section>

        <div className="marquee" aria-label="Áreas de atuação">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<i>—</i></span>
            ))}
          </div>
        </div>

        <section className="practice" id="atuacao">
          <div className="practice__statement" data-reveal="left" data-parallax>
            <p className="section-label">Atuação jurídica</p>
            <h2>Conhecimento jurídico aplicado a desafios reais.</h2>
            <p>Análise cuidadosa, orientação transparente e atuação responsável para pessoas e empresas.</p>
            <small>Direito com estratégia.<br />Relações com confiança.</small>
          </div>
          <div className="practice__list" data-reveal="right">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              const active = activePractice === index;
              return (
                <button
                  className={`practice-row ${active ? "is-active" : ""}`}
                  key={practice.title}
                  type="button"
                  aria-expanded={active}
                  onClick={() => setActivePractice(active ? -1 : index)}
                >
                  <Icon className="practice-row__icon" weight="thin" />
                  <span className="practice-row__content">
                    <strong>{practice.title}</strong>
                    <span>{practice.summary}</span>
                    <span className="practice-row__detail">{practice.detail}</span>
                  </span>
                  <span className="practice-row__arrow"><ArrowIcon /></span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="business-feature" aria-label="Atuação empresarial">
          <div className="business-feature__image" data-reveal="left" data-parallax>
            <img src="/assets/acordo-empresarial.jpg" alt="Acordo profissional entre empresários" />
          </div>
          <div className="business-feature__copy" data-reveal="right">
            <p className="section-label">Soluções para empresas</p>
            <h2>Estratégia jurídica para proteger decisões e preservar negócios.</h2>
            <p>Atuação em recuperação judicial, relações bancárias e questões tributárias com visão jurídica e administrativa.</p>
            <button className="button button--luminous" type="button" onClick={openContact}>
              Conversar com a equipe <ArrowIcon />
            </button>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="about__image" data-reveal="left" data-parallax>
            <img src="/assets/alexandre-tribunal.jpg" alt="Alexandre Carvalho Brígido em atuação profissional" />
            <span>Experiência jurídica e visão administrativa</span>
          </div>
          <div className="about__copy" data-reveal="right">
            <p className="section-label">Alexandre Carvalho Brígido</p>
            <h2>Trajetória construída entre o Direito, a gestão e o serviço público.</h2>
            <p>
              Uma atuação orientada pela leitura técnica de cada situação, pelo diálogo claro e pela compreensão dos impactos jurídicos nas decisões de pessoas e empresas.
            </p>
            <ul>
              {credentials.map((credential) => <li key={credential}>{credential}</li>)}
            </ul>
          </div>
        </section>

        <section className="insight" id="conteudos">
          <div className="insight__art" data-reveal="left" data-parallax>
            <img src="/assets/justica-monocromatica.jpg" alt="Escultura da Justiça com a balança" />
            <span>Informação para decisões conscientes</span>
          </div>
          <div className="insight__heading" data-reveal="up">
            <p className="section-label">Informação jurídica</p>
            <h2>Clareza para entender riscos e possibilidades.</h2>
          </div>
          <div className="insight__rows" data-reveal="right">
            {[
              ["Direito Bancário", "Como identificar cobranças indevidas em contratos bancários"],
              ["Superendividamento", "O que muda com um plano global de pagamento"],
              ["Agronegócio", "Cuidados na análise de financiamentos rurais"],
            ].map(([category, title]) => (
              <a className="insight-row" href="#contato" key={title}>
                <span>{category}</span><strong>{title}</strong><ArrowUpRight weight="thin" />
              </a>
            ))}
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact__visual" data-reveal="left" data-parallax>
            <img src="/assets/alexandre-escritorio-em-pe.jpg" alt="Escritório Advocacia SC em Blumenau" />
          </div>
          <div className="contact__content" data-reveal="right">
            <p className="section-label">Contato</p>
            <h2>Converse com a equipe da Advocacia SC.</h2>
            <p>Atendimento em Blumenau e on-line, com análise individual de cada situação.</p>
            <button className="button button--gold" type="button" onClick={openContact}>
              Agendar atendimento <ArrowIcon />
            </button>
            <div className="contact__details">
              <a href="tel:+554732855741"><Phone weight="thin" /><span>(47) 3285-5741</span></a>
              <p><MapPin weight="thin" /><span>R. XV de Novembro, 1336, sala 21<br />Centro — Blumenau/SC</span></p>
              <p><Clock weight="thin" /><span>Segunda a sexta, das 8h às 18h</span></p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Brand compact />
        <p>Informação jurídica com sobriedade, clareza e responsabilidade.</p>
        <div className="footer__links">
          <a href="https://www.instagram.com/advocaciasc" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramLogo weight="thin" /></a>
          <a href="https://wa.me/554732855741" target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappLogo weight="thin" /></a>
        </div>
        <small>© {new Date().getFullYear()} Advocacia SC. Todos os direitos reservados.</small>
      </footer>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
