# ARKO CRM

Fork do [Twenty](https://github.com/twentyhq/twenty) na tag `v1.15.0`, publicado sob a mesma licença (AGPL-3.0, ver `LICENSE`). A mudança é só visual: nome, ícones, rodapé do login, textos em português, cor de destaque e logo dos e-mails. Nenhuma funcionalidade, migração, API ou banco foi alterada.

## O que mudou em relação ao Twenty v1.15.0

- **Nome:** título da aba, nome do app instalado (PWA) e prévias de link passam a ser `ARKO CRM`; todo título de página termina com `| ARKO CRM`.
- **Ícones e logo:** favicon, ícone iOS, ícones do PWA, imagem de prévia (og e twitter) e o logo padrão da tela de login apontam para `/marca/`, pasta que o servidor monta no deploy.
- **Rodapé do login:** sai o texto e os links de termos e privacidade do Twenty; entra a linha "Código-fonte", com link para a URL de `ARKO_CODIGO_FONTE_URL`. Sem a variável, o rodapé fica vazio.
- **Textos em português (pt-BR):** "Twenty" vira "ARKO CRM" onde é nome do produto, no front, no servidor e nos e-mails. Os catálogos compilados (`locales/generated/pt-BR.ts`) foram atualizados junto.
- **Cores:** o azul/índigo de destaque vira o verde da ARKO (`#2E9A5A` no tema claro, `#3EB76F` no escuro), com escala de 12 tons em `packages/twenty-ui/src/theme/constants/ArkoGreen.ts`. A cor `blue` escolhida pelo usuário em etiquetas continua azul. `theme-color` do navegador em `#141414`.
- **E-mails:** o logo vem da URL de `ARKO_LOGO_EMAIL_URL`, com texto alternativo "ARKO CRM". Sem a variável, o e-mail sai sem imagem.
- **Build:** `.github/workflows/arko-imagem.yml` constrói `packages/twenty-docker/twenty/Dockerfile` e publica em `ghcr.io/<dono>/arko-crm`, por disparo manual ou por tag `arko-*`, só com o `GITHUB_TOKEN`. A imagem leva `APP_VERSION=v1.15.0`, a versão do Twenty de base, porque o servidor valida esse valor como semver e o upgrade da subida compara com ele.

## Arquivos alterados

- `packages/twenty-front/index.html`
- `packages/twenty-front/public/manifest.json`
- `packages/twenty-front/src/modules/auth/components/Logo.tsx`
- `packages/twenty-front/src/modules/auth/sign-in-up/components/FooterNote.tsx`
- `packages/twenty-front/src/modules/ui/utilities/page-title/components/PageTitle.tsx`
- `packages/twenty-front/src/utils/title-utils.ts`
- `packages/twenty-front/src/utils/__tests__/title-utils.test.ts`
- `packages/twenty-front/src/locales/pt-BR.po`
- `packages/twenty-front/src/locales/generated/pt-BR.ts`
- `packages/twenty-server/src/utils/generate-front-config.ts`
- `packages/twenty-server/src/engine/core-modules/i18n/locales/pt-BR.po`
- `packages/twenty-server/src/engine/core-modules/i18n/locales/generated/pt-BR.ts`
- `packages/twenty-emails/src/components/Logo.tsx`
- `packages/twenty-emails/src/locales/pt-BR.po`
- `packages/twenty-emails/src/locales/generated/pt-BR.ts`
- `packages/twenty-ui/src/theme/constants/AccentLight.ts`
- `packages/twenty-ui/src/theme/constants/AccentDark.ts`
- `packages/twenty-ui/src/theme/constants/MainColorsLight.ts`
- `packages/twenty-ui/src/theme/constants/MainColorsDark.ts`
- `packages/twenty-ui/src/theme/constants/SecondaryColorsLight.ts`
- `packages/twenty-ui/src/theme/constants/SecondaryColorsDark.ts`
- `packages/twenty-ui/src/theme/constants/TransparentColorsLight.ts`
- `packages/twenty-ui/src/theme/constants/TransparentColorsDark.ts`
- `packages/twenty-ui/src/theme/constants/TagLight.ts`
- `packages/twenty-ui/src/theme/constants/TagDark.ts`

## Arquivos novos

- `ARKO.md`
- `.github/workflows/arko-imagem.yml`
- `packages/twenty-front/public/marca/LEIA.md`
- `packages/twenty-ui/src/theme/constants/ArkoGreen.ts`

## Variáveis novas do servidor

| Variável | Para que serve | Sem ela |
|---|---|---|
| `ARKO_CODIGO_FONTE_URL` | Link "Código-fonte" no rodapé do login (AGPL, seção 13). Entra no `window._env_` do front por `generate-front-config.ts`. | A linha não aparece. |
| `ARKO_LOGO_EMAIL_URL` | Endereço público do logo dos e-mails. Lida na hora de montar o e-mail, no servidor e no worker. | O e-mail sai sem logo. |

## Arquivos de marca

Os arquivos de marca **não fazem parte deste repositório**. Logo, favicon e ícones são montados no servidor, na pasta `/app/packages/twenty-server/dist/front/marca` do contêiner, com os nomes `favicon.png`, `icone-192.png`, `icone-512.png` e `og.png`. O logo dos e-mails é servido por uma URL configurada em `ARKO_LOGO_EMAIL_URL`. O nome "ARKO CRM" em texto pode aparecer no código.

## E-mails sem o Twenty

- **Rodapé:** saem os links de twenty.com, GitHub e documentação do Twenty e a linha "Twenty.com, Public Benefit Corporation / San Francisco / Paris". Fica "ARKO CRM" e, com `ARKO_CODIGO_FONTE_URL`, o link "Código-fonte".
- **Título do HTML:** `ARKO CRM` no lugar de `Twenty email`.
- **Logo padrão de workspace** (e-mail de validação de domínio, quando o workspace não tem logo): a URL de `ARKO_LOGO_EMAIL_URL`, em 100 x 28; sem a variável, sem imagem.
- **Remetente:** o padrão de `EMAIL_FROM_NAME` passa a ser `ARKO CRM`, e o "(via Twenty)" dos e-mails de convite e de validação de domínio passa a usar o valor de `EMAIL_FROM_NAME`, como em "(via ARKO CRM)". O endereço de envio não mudou.
- **E-mails de workspace suspenso ou apagado:** o botão leva ao `SERVER_URL` do próprio servidor, e não a app.twenty.com.
- **E-mail de verificação:** "ARKO CRM" no texto, que não passa por catálogo de tradução.
- **Prévias de desenvolvimento** (`PreviewProps`): URLs de exemplo em `crm.example.com`.

Arquivos alterados:

- `packages/twenty-emails/src/components/Footer.tsx`
- `packages/twenty-emails/src/components/BaseEmail.tsx`
- `packages/twenty-emails/src/components/BaseHead.tsx`
- `packages/twenty-emails/src/constants/DefaultWorkspaceLogo.ts`
- `packages/twenty-emails/src/emails/validate-approved-access-domain.email.tsx`
- `packages/twenty-emails/src/emails/clean-suspended-workspace.email.tsx`
- `packages/twenty-emails/src/emails/warn-suspended-workspace.email.tsx`
- `packages/twenty-emails/src/emails/send-email-verification-link.email.tsx`
- `packages/twenty-emails/src/emails/send-invite-link.email.tsx`
- `packages/twenty-emails/src/emails/password-reset-link.email.tsx`
- `packages/twenty-emails/src/emails/password-update-notify.email.tsx`
- `packages/twenty-server/src/engine/workspace-manager/workspace-cleaner/services/cleaner.workspace-service.ts`
- `packages/twenty-server/src/engine/core-modules/approved-access-domain/services/approved-access-domain.service.ts`
- `packages/twenty-server/src/engine/core-modules/approved-access-domain/services/approved-access-domain.spec.ts`
- `packages/twenty-server/src/engine/core-modules/workspace-invitation/services/workspace-invitation.service.ts`
- `packages/twenty-server/src/engine/core-modules/twenty-config/config-variables.ts`
