import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationContainer = styled.nav`
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
      position: relative;
      cursor: pointer;
      color: ${theme.purple_800};
      background: ${theme.purple_200};

      &:last-child {
        color: ${theme.yellow_800};
        background: ${theme.yellow_200};
      }
    }
  `}
`;

interface CartLinkProps {
  $itemsQuantity: number;
}

export const CartLink = styled(Link)<CartLinkProps>`
  ${({ theme, $itemsQuantity }) => css`
    ${$itemsQuantity > 0 &&
    css`
      &:before {
        content: "${$itemsQuantity}";
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        height: 1.25rem;
        width: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: ${theme.yellow_800};
        color: ${theme.white};
        font-size: 0.75rem;
      }
    `}
  `}
`;
