# Design QA — header, hero e fotografia

## Evidências

- Verdade visual: `/workspace/scratch/dbdbfdd28203/upload/01-267614.jpg`.
- Fotografias de referência: `02-266451.jpg` a `07-267280.jpg` na mesma pasta.
- Estado avaliado: início da página em viewport mobile; referência com 691 × 1536 px.
- Implementação: projeto local `/workspace/scratch/dbdbfdd28203/advocacia-sc`.

## Comparação e correções

- P0 corrigido — o CTA do header anulava o `display:none` mobile por ordem de CSS e comprimia logo/menu.
- P1 corrigido — o menu recebeu largura, altura, `min-width`, `flex-basis` e proporção fixas de 48 × 48 px.
- P1 corrigido — o hero passou a usar a fotografia real do escritório, legenda editorial e recorte focado no rosto.
- P1 corrigido — foram incorporadas três fotografias reais em uma composição editorial abaixo da atuação.
- P2 corrigido — Justiça e balança passaram a ser fundos discretos, escurecidos e sem competir com o conteúdo.
- P2 corrigido — removidos blur e transição global caros no mobile; parallax só atualiza enquanto o hero está próximo da viewport.
- P2 corrigido — revelação fotográfica usa apenas `transform` e `opacity` para reduzir engasgos.
- P2 corrigido — marca e textos do rodapé receberam contenção de largura e quebra segura.

## Superfícies de fidelidade

- Tipografia: Cormorant Garamond e Manrope preservadas; escala e pesos mantidos.
- Espaçamento: header mobile recomposto; hero e galeria usam o mesmo gutter global.
- Cores: azul-marinho, creme e dourado originais preservados.
- Imagens: seis novos WebP otimizados; fotos reais em primeiro plano e imagens simbólicas apenas como fundo.
- Conteúdo: textos jurídicos existentes preservados.

## Testes

- Build de produção: passou.
- JavaScript: sintaxe válida.
- Sites packaging: 4/4 testes passaram.
- `prefers-reduced-motion`: preservado.
- Captura do navegador: bloqueada. O serviço de preview local não estava disponível e o Vite não conseguiu expor a interface de rede deste ambiente; o navegador remoto recebeu `ERR_CONNECTION_REFUSED`.
- Interações e console no navegador: não puderam ser verificados pelo mesmo bloqueio.

## Resultado

final result: blocked

A implementação está validada por build e testes, mas não houve evidência renderizada da versão revisada no mesmo viewport da captura de referência.
