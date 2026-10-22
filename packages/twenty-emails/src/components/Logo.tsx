import { Img } from '@react-email/components';

const logoStyle = {
  marginBottom: '40px',
};

// ARKO: o logo dos e-mails mora fora do repositorio; a URL vem da variavel
// ARKO_LOGO_EMAIL_URL do servidor. Sem a variavel, o e-mail sai sem imagem.
const getLogoUrl = () => {
  const url = process.env.ARKO_LOGO_EMAIL_URL;

  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null;
};

export const Logo = () => {
  const logoUrl = getLogoUrl();

  if (logoUrl === null) {
    return null;
  }

  return (
    <Img
      src={logoUrl}
      alt="ARKO CRM"
      width="200"
      height="56"
      style={logoStyle}
    />
  );
};
