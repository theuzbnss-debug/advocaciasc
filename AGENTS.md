# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

## Approved direction

- Source of truth: `/workspace/scratch/dbdbfdd28203/generated_images/exec-27aa2bd1-ed8e-4dec-a002-6fc0d2a91139.png`.
- Preserve the dark cinematic navy and champagne-gold visual system, real photography, serif-led typography, continuous practice-area marquee, and open list-based layouts.
- Motion must feel premium and fluid: a short preloader with the emblem and the name "Alexandre Carvalho Brígido", a panel reveal into the hero, staggered scroll reveals, subtle image parallax, and refined hover states.
- Respect `prefers-reduced-motion`; the intro must never prevent access to the site.
- Approved hero copy: "Experiência jurídica para decisões complexas." and "Atuação técnica em questões bancárias, tributárias, empresariais e patrimoniais."
- Latest client feedback: the brand mark must always be fully visible (never cropped), the full lawyer name should remain in the lockup on mobile, buttons should feel premium and softly animated, cream and navy sections should blend through subtle transparent gradient transitions, text containers should use softer corners and spacing, and photography should be treated with editorial frames and motion rather than appearing as plain rectangular blocks.
- Additional approved imagery: `public/assets/balanca-dourada.jpg`, `public/assets/acordo-empresarial.jpg`, and `public/assets/justica-monocromatica.jpg`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
