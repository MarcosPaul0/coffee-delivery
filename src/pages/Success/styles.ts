import styled, { css } from "styled-components";

export const SuccessContainer = styled.main`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;   

    padding: 2.5rem 10rem;

    h1 {
      font-family: "Baloo 2", sans-serif;
      color: ${theme.yellow_800};
      font-size: 2rem;
      line-height: 130%;
    }

    p {
      color: ${theme.brown_600};
      font-size: 1.25rem;
      line-height: 130%;
      margin: 0.25rem 0 2.5rem;
    }
  `}
`;

interface ItemProps {
  bgColor: "darkYellow" | "yellow" | "purple";
}

const BACKGROUND_COLOR = {
  yellow: "yellow_500",
  purple: "purple_500",
  darkYellow: "yellow_800",
} as const;

export const Item = styled.div<ItemProps>`
  ${({ theme, bgColor }) => css`
    background: ${theme[BACKGROUND_COLOR[bgColor]]};
    color: ${theme.gray_100};

    width: 2rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    line-height: 0;
    border-radius: 50%;
  `}
`;

export const TopicsContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 6px 36px;
    overflow: hidden;

    width: 32.875rem;
    width: 100%;

    background: linear-gradient(
      to right,
      ${theme.yellow_500},
      ${theme.purple_500}
    );

    > div {
      border-radius: 5px 35px;
      padding: 2.5rem;
      margin: 1px;


      display: flex;
      flex-direction: column;
      gap: 2rem;

      background: ${theme.gray_100};
    }
  `}
`;

export const Topic = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${theme.brown_400};
      max-width: 19.375rem;
    }
  `}
`;
