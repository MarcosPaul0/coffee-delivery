import styled, { css } from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2.5rem 10rem;

  form {
    display: flex;
    flex: 1;

    gap: 2rem;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: 0.75rem;

    > div {
      max-width: 40rem;
      width: 100%;
      background: ${theme.gray_200};
      border-radius: 6px;

      padding: 2.5rem;
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

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
  }
`;

export const PaymentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.75rem;

    color: ${theme.purple_500};

    button {
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

      &.active {
        border: 1px solid ${theme.purple_500};
        background: ${theme.purple_200};
      }
    }
  `}
`;

export const CoffeesSelectedContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: 0.75rem;
    flex: 1;

    > div {
      max-width: 28rem;
      width: 100%;
      background: ${theme.gray_200};
      border-radius: 6px 44px;
      padding: 2.5rem;
    }
  `}
`;

export const ConfirmButton = styled.button`
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
  `}
`;

export const OrderDetailsContainer = styled.div`
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
