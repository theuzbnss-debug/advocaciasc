# Migração SEO — Advocacia SC

## Implementado nesta versão

- Dados estruturados `LegalService`, `Person`, `FAQPage` e `BreadcrumbList`.
- OAB/SC 20.137, conforme o site WordPress atual.
- Títulos, descrições, canonical e Open Graph nas páginas principais.
- `robots.txt` e `sitemap.xml` preparados para `https://www.advocaciasc.com`.
- Conteúdo permanente para Direito Bancário, Revisional, Busca e Apreensão, Superendividamento, Execução Fiscal, Inventário e Previdenciário.
- Artigos informativos completos, com FAQ visível e estruturado.
- Redirecionamentos 301 para URLs antigas revisionais mapeadas.

## Checklist para a troca do domínio

1. Exportar um backup integral do WordPress: banco de dados, `wp-content/uploads`, temas, plugins e arquivo de configuração.
2. Exportar a relação final de URLs indexadas pelo Google Search Console e comparar com o mapa de redirecionamentos.
3. Manter o WordPress em backup, mas publicar a nova versão como site estático/edge. Não é necessário manter WordPress para editar estes arquivos.
4. Apontar o domínio somente depois de validar a versão final e o SSL.
5. Replicar o mesmo contêiner do Google Tag Manager ou os mesmos IDs de GA4 e Google Ads. Não criar tags duplicadas.
6. Verificar Google Search Console, enviar o novo sitemap e acompanhar páginas 404, cobertura e posições por pelo menos 30 dias.
7. Preservar o domínio, os slugs relevantes e os redirecionamentos 301. Não remover o WordPress antigo antes da validação.

## Dados ainda necessários do cliente

- Acesso ao registrador/DNS do domínio `advocaciasc.com`.
- Acesso ou convite ao Google Search Console, Google Analytics 4 e Google Tag Manager.
- Confirmação de qual contêiner é o oficial. O WordPress atual carrega três contêineres (`GTM-T4THW58`, `GTM-N7JRRXRM` e `GTM-KNSRPTM6`); eles não foram copiados automaticamente para evitar medição duplicada.
- Exportação das URLs do WordPress e relatório de páginas orgânicas do Search Console para validar 100% dos redirecionamentos.
- Confirmação final de que o WhatsApp móvel publicado no WordPress, `(47) 99771-4202`, continuará ativo após a migração.
