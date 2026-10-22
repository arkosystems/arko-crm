import styled from '@emotion/styled';
import { Trans } from '@lingui/react/macro';

import { useWorkspaceBypass } from '@/auth/sign-in-up/hooks/useWorkspaceBypass';
import { useIsCurrentLocationOnAWorkspace } from '@/domain-manager/hooks/useIsCurrentLocationOnAWorkspace';

const StyledCopyContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.sm};
  max-width: 280px;
  text-align: center;

  & > a {
    color: ${({ theme }) => theme.font.color.tertiary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledLinksContainer = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.font.color.tertiary};
  display: flex;
  flex-wrap: nowrap;
  font-size: ${({ theme }) => theme.font.size.sm};
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
  max-width: 100%;
  text-align: center;
  white-space: nowrap;

  & > a,
  & > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.font.color.tertiary};
    cursor: pointer;
    font: inherit;
    padding: 0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledSeparator = styled.span`
  color: ${({ theme }) => theme.font.color.tertiary};
`;

// ARKO: o rodape mostra so o link do codigo-fonte (AGPL, secao 13), lido da
// variavel ARKO_CODIGO_FONTE_URL do servidor; sem a variavel, a linha nao aparece
const getSourceCodeUrl = () => {
  const url = window._env_?.ARKO_CODIGO_FONTE_URL;

  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null;
};

export const FooterNote = () => {
  const isOnAWorkspace = useIsCurrentLocationOnAWorkspace();

  const { shouldOfferBypass, shouldUseBypass, enableBypass } =
    useWorkspaceBypass();

  const sourceCodeUrl = getSourceCodeUrl();

  const sourceCodeLink =
    sourceCodeUrl !== null ? (
      <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
        Código-fonte
      </a>
    ) : null;

  if (!isOnAWorkspace) {
    return sourceCodeLink !== null ? (
      <StyledCopyContainer>{sourceCodeLink}</StyledCopyContainer>
    ) : null;
  }

  const shouldShowBypass = shouldOfferBypass && !shouldUseBypass;

  if (!shouldShowBypass && sourceCodeLink === null) {
    return null;
  }

  return (
    <StyledLinksContainer>
      {shouldShowBypass && (
        <button type="button" onClick={enableBypass}>
          <Trans>Bypass SSO</Trans>
        </button>
      )}
      {shouldShowBypass && sourceCodeLink !== null && (
        <StyledSeparator>•</StyledSeparator>
      )}
      {sourceCodeLink}
    </StyledLinksContainer>
  );
};
