import styled, { css } from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  padding: 2.5rem 10rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const CoffeesSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 0.75rem;
    max-width: 28rem;
    width: 100%;
`;
