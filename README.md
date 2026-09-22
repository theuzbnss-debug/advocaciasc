# Advocacia SC

Landing page responsiva para a Advocacia SC — Alexandre Carvalho Brígido.

## Recursos

- Hero visível no primeiro frame, sem splash ou animação de carregamento
- Layout mobile-first com fotografia real e marca em fundo transparente
- Lista editorial de conteúdos sem links falsos
- Linha do tempo profissional e transições de fundo sóbrias
- Agendamento validado com envio da mensagem pelo WhatsApp
- Política de Privacidade, navegação por teclado e `prefers-reduced-motion`
- Menu móvel e header que responde à direção da rolagem

## Desenvolvimento

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm run test:sites
```

Os quatro arquivos principais podem ser usados como site estático: `index.html`, `styles.css`, `script.js` e `privacidade.html`. Preserve a pasta `public/assets` no mesmo projeto.

Antes da publicação, resolva todos os comentários `TODO`: número móvel real de WhatsApp, OAB/SC, textos de apoio dos artigos, dados de LGPD e imagem Open Graph definitiva.
