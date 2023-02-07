import styled, { css } from "styled-components";

export const AddressFormContainer = styled.div`
  ${({ theme }) => css`
    max-width: 40rem;
    width: 100%;
    background: ${theme.gray_200};
    border-radius: 6px;
    padding: 2.5rem;

    svg {
      color: ${theme.yellow_800};
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

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.gray_400};
    background: ${theme.gray_300};
    color: ${theme.brown_400};
    border-radius: 4px;
    padding: 0.75rem;
    width: 100%;

    &::placeholder {
      color: ${theme.brown_200};
    }
  `}
`;

interface InputsContainerProps {
  columns: string;
}

export const InputsContainer = styled.div<InputsContainerProps>`
  ${({ columns }) => css`
    width: 100%;
    align-items: flex-start;
    display: grid;
    gap: 0.75rem;
    grid-template-columns: ${columns};
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.brown_400};
    font-size: 0.75rem;
  `}
`;
