import styled, { css } from "styled-components";

export const CoffeeItemContainer = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 1.25rem;
    padding: 0.5rem 0.25rem 2rem;
    border-bottom: 1px solid ${theme.gray_400};

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }

    > span {
      font-size: 1rem;
      font-weight: bold;
      color: ${theme.brown_400};
      margin-left: 1.875rem;
    }
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;

      color: ${theme.brown_600};
    }
  `}
`;

export const ActionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    > button:last-child {
      height: 2rem;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      border: none;
      border-radius: 6px;
      line-height: 160%;
      padding: 0.5rem 0.40625rem;
      background: ${theme.gray_400};
      color: ${theme.brown_400};
      transition: background 0.2s;

      &:hover {
        background: ${theme.gray_500};
      }
    }
  `}
`;
