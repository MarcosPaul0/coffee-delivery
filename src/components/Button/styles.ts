import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  ${({ theme }) => css`
    background: ${theme.yellow_500};
    color: ${theme.white};
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.75rem;
    transition: background 0.2s;

    &:not(:disabled):hover {
      background: ${theme.yellow_800};
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
