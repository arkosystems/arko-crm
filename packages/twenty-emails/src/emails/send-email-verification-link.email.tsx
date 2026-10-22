import { Trans } from '@lingui/react';
import { BaseEmail } from 'src/components/BaseEmail';
import { CallToAction } from 'src/components/CallToAction';
import { MainText } from 'src/components/MainText';
import { Title } from 'src/components/Title';
import { createI18nInstance } from 'src/utils/i18n.utils';
import { type APP_LOCALES } from 'twenty-shared/translations';

type SendEmailVerificationLinkEmailProps = {
  link: string;
  locale: keyof typeof APP_LOCALES;
  isEmailUpdate?: boolean;
};

export const SendEmailVerificationLinkEmail = ({
  link,
  locale,
  isEmailUpdate = false,
}: SendEmailVerificationLinkEmailProps) => {
  const i18n = createI18nInstance(locale);
  const title = isEmailUpdate
    ? i18n._('Confirm your new email address')
    : i18n._('Confirm your email address');
  // ARKO: estes dois textos nao estao em catalogo nenhum (o id e dinamico e o
  // extrator do Lingui nao o pega), entao o id e o proprio texto exibido;
  // "ARKO CRM" entra direto aqui, sem mexer nos catalogos.
  const bodyId = isEmailUpdate
    ? 'We received a request to change the email address associated with your ARKO CRM account. Click below to confirm this change.'
    : 'Thanks for registering for an account on ARKO CRM! Before we get started, we just need to confirm that this is you. Click below to verify your email address.';
  const ctaLabel = isEmailUpdate
    ? i18n._('Confirm new email')
    : i18n._('Verify Email');

  return (
    <BaseEmail width={333} locale={locale}>
      <Title value={title} />
      <MainText>
        <Trans id={bodyId} />
      </MainText>
      <br />
      <CallToAction href={link} value={ctaLabel} />
      <br />
      <br />
    </BaseEmail>
  );
};

SendEmailVerificationLinkEmail.PreviewProps = {
  link: 'https://crm.example.com/verify-email/123',
  locale: 'en',
  isEmailUpdate: false,
};

export default SendEmailVerificationLinkEmail;
