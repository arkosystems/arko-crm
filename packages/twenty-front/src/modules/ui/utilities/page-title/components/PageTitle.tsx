import { Helmet } from 'react-helmet-async';

type PageTitleProps = {
  title: string;
};

// ARKO: todo titulo de aba termina com o nome do produto
const PRODUCT_NAME = 'ARKO CRM';

const withProductSuffix = (title: string) => {
  const base = title.replace(/\s*\|\s*(Twenty|ARKO CRM)\s*$/, '').trim();

  return base === '' || base === PRODUCT_NAME
    ? PRODUCT_NAME
    : `${base} | ${PRODUCT_NAME}`;
};

export const PageTitle = (props: PageTitleProps) => {
  return (
    <Helmet>
      <title>{withProductSuffix(props.title)}</title>
    </Helmet>
  );
};
