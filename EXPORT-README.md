# Espaço Wellness — Código-fonte

Este pacote contém o código-fonte atual do site em React, Vite e Tailwind CSS.

## Como executar localmente

1. Instale o Node.js 20 ou superior.
2. No diretório do projeto, execute `pnpm install`.
3. Execute `pnpm dev` para abrir a versão de desenvolvimento.
4. Execute `pnpm build` para gerar a versão de produção.

## Publicação em outra hospedagem

O site usa caminhos `/manus-storage/...` para imagens e fontes. Para publicar fora deste ambiente, envie esses arquivos a uma hospedagem própria ou CDN e substitua cada caminho por sua nova URL pública no código.

Os principais arquivos de interface estão em `client/src/pages/`, os componentes compartilhados em `client/src/components/` e os estilos globais em `client/src/index.css`.
