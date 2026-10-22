import { Container } from '@react-email/components';
import { Link } from 'src/components/Link';
import { ShadowText } from 'src/components/ShadowText';

const footerContainerStyle = {
  marginTop: '12px',
};

// ARKO: o rodape mostra so "ARKO CRM" e o link do codigo-fonte (AGPL, secao
// 13), lido da variavel ARKO_CODIGO_FONTE_URL do servidor; sem a variavel, o
// link nao aparece. Texto fixo, sem Lingui, como no rodape do login.
const getSourceCodeUrl = () => {
  const url = process.env.ARKO_CODIGO_FONTE_URL;

  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null;
};

export const Footer = () => {
  const sourceCodeUrl = getSourceCodeUrl();

  return (
    <Container style={footerContainerStyle}>
      <ShadowText>
        {sourceCodeUrl === null ? (
          'ARKO CRM'
        ) : (
          <>
            ARKO CRM
            <br />
            <Link href={sourceCodeUrl} value="Código-fonte" />
          </>
        )}
      </ShadowText>
    </Container>
  );
};
