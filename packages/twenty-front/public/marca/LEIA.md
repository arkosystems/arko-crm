# Pasta `marca`

Esta pasta fica vazia no repositório de propósito. Os arquivos de marca (`favicon.png`, `icone-192.png`, `icone-512.png`, `og.png`) não fazem parte do código e são montados no servidor na hora do deploy, no caminho `/app/packages/twenty-server/dist/front/marca` do contêiner.

O front aponta para `/marca/<arquivo>`; sem a montagem, os ícones não aparecem e o resto do sistema funciona normalmente.
