import styled, { css } from "styled-components";

export const PaymentFormContainer = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    width: 100%;
    background: ${theme.gray_200};
    border-radius: 6px;
    padding: 2.5rem;

    svg {
      color: ${theme.purple_500};
    }
  `}
`;

export const FormHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    gap: 0.6875rem;
    align-items: flex-start;
    margin-bottom: 2rem;

    h2 {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.3rem;

      color: ${theme.brown_600};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.3rem;

      color: ${theme.brown_400};
    }
  `}
`;

export const PaymentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.75rem;
    color: ${theme.purple_500};
  `}
`;

interface PaymentOptionProps {
  isActive: boolean;
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  ${({ theme, isActive }) => css`
    width: 100%;
    height: 3.1875rem;
    width: 100%;
    font-size: 0.75rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    border: none;
    border-radius: 6px;
    background: ${theme.gray_400};
    color: ${theme.brown_400};
    transition: background 0.2s;

    ${isActive &&
    css`
      border: 1px solid ${theme.purple_500};
      background: ${theme.purple_200};
    `}

    ${!isActive &&
    css`
      &:hover {
        background: ${theme.gray_500};
      }
    `}

    svg {
      color: ${theme.purple_500};
    }
  `}
`;
