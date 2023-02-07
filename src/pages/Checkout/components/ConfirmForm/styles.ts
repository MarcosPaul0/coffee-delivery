import styled, { css } from "styled-components";

export const ConfirmFormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.gray_200};
    border-radius: 6px 44px;
    padding: 2.5rem;
  `}
`;

export const OrderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
    gap: 0.9375rem;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 0.875rem;
        color: ${theme.brown_400};
      }

      strong {
        font-size: 1.25rem;
        color: ${theme.brown_600};
      }
    }
  `}
`;
