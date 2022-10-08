import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      margin: 0 auto;

      text-decoration: none;

      padding: 0.5rem;
      border: none;
      border-radius: 6px;

      cursor: pointer;

      &:first-child {
        color: ${theme.purple_800};
        background: ${theme.purple_200};
      }

      &:last-child {
        color: ${theme.yellow_800};
        background: ${theme.yellow_200};
      }
    }
  `}
`;
