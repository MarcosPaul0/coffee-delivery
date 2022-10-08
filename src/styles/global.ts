import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus {
      outline: 0;

      box-shadow: 0 0 0 1px ${theme.yellow_800};
    }

    body {
      -webkit-font-smoothing: antialiased;

      background: ${theme.gray_100};
      color: ${theme.brown_800};
    }

    body,
    input,
    button,
    textarea {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }

    button {
      cursor: pointer;
    }
  `}
`;
