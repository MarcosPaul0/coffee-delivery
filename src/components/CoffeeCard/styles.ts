import styled, { css } from "styled-components";

export const CoffeeCardContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.gray_200};

    max-width: 16rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 6px 36px;

    img {
      margin-top: -1.25rem;
    }

    > span {
      background: ${theme.yellow_200};
      color: ${theme.yellow_800};

      border-radius: 100px;
      padding: 0.25rem 0.5rem;

      font-weight: bold;
      font-size: 0.625rem;

      margin: 1rem 0 1.25rem 0;
    }

    h2 {
      font-family: "Baloo 2";
      font-weight: bold;
      font-size: 1.25rem;

      padding: 0 1.25rem;
    }

    p {
      color: ${theme.brown_200};

      font-size: 0.875rem;
      text-align: center;

      padding: 0 1.25rem;
    }
  `}
`;

export const BuyContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 2.0625rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0 1.5rem 1.25rem 1.5rem;

    > span {
      ::before {
        content: "R$ ";

        font-family: "Roboto", sans-serif;
        font-weight: normal;
        font-size: 0.875rem;

        color: ${theme.brown_400};
      }

      font-family: "Baloo 2", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;

      color: ${theme.brown_400};
    }

    > button {
      line-height: 0;

      color: ${theme.gray_200};
      background: ${theme.purple_800};

      border: none;
      border-radius: 6px;
      padding: 0.625rem;
    }
  `}
`;
