# Auditoria — Advocacia SC

## Escopo e evidências

Auditoria combinada de UX, responsividade e acessibilidade, com foco no fluxo mobile: entrada no site → compreensão da atuação → confiança → solicitação de atendimento.

Evidências utilizadas:

- Capturas mobile fornecidas pelo usuário (contato, artigos, trajetória e fotografias).
- Inspeção do HTML, React, CSS e JavaScript da versão anterior.
- A captura direta do site publicado foi bloqueada pela autenticação privada; portanto, esta auditoria não declara conformidade WCAG ou Lighthouse da versão publicada.

## P0 — quebrado

1. **Intro atrasava o conteúdo:** componente `Intro`, `setTimeout` de 2,5 s e elementos com opacidade inicial impediam o hero de aparecer no primeiro frame.
2. **Overflow horizontal:** deslocamentos de `translateX`, margens laterais independentes e elementos full-bleed sem um modelo único de container criavam a faixa escura lateral vista nas capturas.
3. **Hero com zonas sobrepostas:** texto, botão e retrato dividiam a mesma área absoluta no mobile, permitindo que o CTA cobrisse o rosto.
4. **Imagem do aperto de mão com grande vazio preto:** o arquivo tinha composição inadequada ao card e era usado como conteúdo principal sem recorte coerente.
5. **Foto sem preencher a área:** altura livre e recorte sem proporção fixa deixavam faixa cinza no topo.
6. **Títulos colidindo:** `line-height` entre 0,83 e 0,98 nas serifas fazia descendentes e acentos se encostarem.
7. **Artigos com links falsos:** os três itens apontavam para `#contato`, tinham seta e aparência de conteúdo publicado sem existir página de artigo.
8. **Formulário sem agendamento real:** a modal apenas mudava para um estado de sucesso; não validava data, horário, modalidade nem enviava ao WhatsApp.
9. **Estado visual inconsistente:** hover/deslocamento podia permanecer aparente em captura mobile, produzindo um card central dourado e recuado.

## P1 — feio, confuso ou fraco

1. **Contraste baixo:** subtítulos em serifa fina, cinza e pequenos sobre azul-marinho reduziam a leitura no celular.
2. **CTAs fracos:** outline dourado, altura e contraste variavam entre hero, header e contato.
3. **Espaçamento irregular:** cada seção tinha padding próprio, criando vazios longos e ritmo inconsistente.
4. **Transições “sujas”:** faixas escuras curtas no topo do creme pareciam sombra, não uma transição intencional.
5. **Imagens genéricas:** estátua da Justiça e aperto de mãos reduziam autenticidade; a foto da janela com pergaminho destoava do retrato principal.
6. **Eyebrows excessivos:** caixa alta, tracking alto e largura pequena provocavam quebras desconfortáveis.
7. **Molduras demais:** fotos, listas e textos usavam bordas, raios e sombras simultaneamente, deixando aparência de template.
8. **Logo encaixotada:** fundo preto, borda dourada e recorte ampliado cortavam a marca.
9. **Conversão incompleta:** CTAs abriam modal genérica; endereço não levava ao mapa; faltava botão móvel discreto de WhatsApp.
10. **Confiança e conformidade:** faltavam OAB/SC, aviso de caráter informativo, Política de Privacidade e explicação sobre tratamento de dados.
11. **Header no mobile:** menu não tinha comportamento de ocultar/retornar conforme direção da rolagem.

## P2 — polimento

1. Faltavam estados `:focus-visible` consistentes.
2. Alvos de toque variavam e alguns ficavam abaixo de 48 px.
3. As imagens não tinham `width`/`height`, `loading="lazy"` nem WebP/AVIF.
4. Metadados Open Graph e canonical não estavam preparados para o domínio final.
5. Parallax percorria vários elementos dentro de um listener de scroll, custo desnecessário em Android de entrada.
6. A hierarquia semântica podia melhorar com `aria-labelledby`, `fieldset`, `legend`, mensagens de erro focáveis e skip link.
7. A trajetória parecia lista de caixas, sem relação visual entre os itens.
8. Não havia mensagem clara de que o horário dependia de confirmação da equipe.

## Correções aplicadas

- Removidos por completo splash, preloader, delay e fade de carregamento.
- Recriado o hero em fluxo normal no mobile, com foto separada e rosto livre.
- Adotado um único container de 1120 px e proteção `overflow-x: clip` após a correção da causa.
- Removidas imagens genéricas de conteúdo; a balança ficou somente como fundo escurecido do agendamento, conforme o briefing.
- Marca convertida para PNG transparente e exibida sem caixa, borda ou fundo.
- Títulos com `line-height` entre 1,08 e 1,15.
- Artigos convertidos em lista editorial não clicável, sem seta, enquanto as páginas não existem.
- Trajetória convertida em linha do tempo vertical.
- Nova seção de agendamento com validação, dias úteis, horários, modalidade, “Outro assunto” e envio ao WhatsApp.
- Criada Política de Privacidade e avisos de ausência de armazenamento no site.
- Adicionados foco visível, targets mínimos, links de telefone/mapa, header responsivo e `prefers-reduced-motion`.

## Pendências reais

- Confirmar número móvel do WhatsApp; o telefone informado é fixo.
- Confirmar número OAB/SC.
- Aprovar os textos de apoio dos artigos.
- Confirmar canal e responsável LGPD.
- Validar com o cliente a publicidade conforme Código de Ética e Provimento 205/2021.
