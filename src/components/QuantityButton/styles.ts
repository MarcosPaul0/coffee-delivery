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
      color: ${theme.purple_500};
      background: transparent;
      border: none;
      line-height: 0;
      font-size: 1.25rem;

      &:first-child {
        padding: 0 0.25rem 0 0.5rem;
      }

      &:last-child {
        padding: 0 0.5rem 0 0.25rem;
      }

      svg {
        transition: color 0.2s;
      }

      &:hover {
        svg {
          color: ${theme.purple_800}
        }
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
