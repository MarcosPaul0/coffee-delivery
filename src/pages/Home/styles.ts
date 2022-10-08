import styled, { css } from "styled-components";

import heroImg from "../../assets/background.svg";

export const Hero = styled.div`
  ${({ theme }) => css`
    width: 100%;

    background-image: ${`url(${heroImg})`};
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    padding: 5.75rem 10rem;

    h1 {
      font-family: "Baloo 2", sans-serif;
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.875rem;
    }

    p {
      color: ${theme.brown_600};

      font-size: 1.25rem;
      line-height: 1.625rem;

      padding: 1rem 6rem 1rem 0;
    }
  `}
`;

export const ItemsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 3.125rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;

    span {
      color: ${theme.brown_600};

      font-size: 1rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  `}
`;

interface ItemProps {
  bgColor: "darkYellow" | "yellow" | "purple" | "brown";
}

const BACKGROUND_COLOR = {
  darkYellow: "yellow_800",
  yellow: "yellow_500",
  purple: "purple_800",
  brown: "brown_800",
} as const;

export const Item = styled.div<ItemProps>`
  ${({ theme, bgColor }) => css`
    background: ${theme[BACKGROUND_COLOR[bgColor]]};
    color: ${theme.gray_100};

    padding: 0.5rem;
    line-height: 0;
    border-radius: 50%;
  `}
`;

export const CoffeesList = styled.main`
  padding: 2rem 10rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 2rem;
  }

  > div {
    margin-top: 3.375rem;
  }
`;
