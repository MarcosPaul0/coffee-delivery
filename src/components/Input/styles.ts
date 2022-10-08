import styled, { css } from "styled-components";

interface InputContainerProps {
  width: number;
}

export const InputContainer = styled.input<InputContainerProps>`
  ${({ theme, width }) => css`
    border: 1px solid ${theme.gray_400};
    background: ${theme.gray_300};
    color: ${theme.brown_400};

    border-radius: 4px;
    padding: 0.75rem;
    width: ${width + '%'};

    &::placeholder {
      color: ${theme.brown_200};
    }
  `}
`;
