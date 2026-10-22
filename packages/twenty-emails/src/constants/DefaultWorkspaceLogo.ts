// ARKO: sem logo do workspace, o e-mail usa o mesmo logo do cabecalho, lido da
// variavel ARKO_LOGO_EMAIL_URL do servidor (200 x 56). Sem a variavel, sem imagem.
export const DEFAULT_WORKSPACE_LOGO_WIDTH = 100;
export const DEFAULT_WORKSPACE_LOGO_HEIGHT = 28;

export const getDefaultWorkspaceLogo = () => {
  const url = process.env.ARKO_LOGO_EMAIL_URL;

  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null;
};
