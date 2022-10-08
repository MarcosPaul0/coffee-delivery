import styled, { css } from "styled-components";

export const QuantityButtonContainer = styled.div`
  ${({ theme }) => css`
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    background: ${theme.gray_400};

    > button {
      height: 100%;
      background: transparent;
      border: none;

      font-size: 1.25rem;

      color: ${theme.purple_500};

      &:first-child {
        padding: 0 0.25rem 0 0.5rem;

      }

      &:last-child {
      padding: 0 0.5rem 0 0.25rem;

      }
    }

    span {
      color: ${theme.brown_800};
      text-align: center;
      line-height: 2.375rem;
      vertical-align: middle;

    }
  `}
`;
