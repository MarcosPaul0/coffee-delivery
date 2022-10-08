import { ActionsContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo Coffee Delivery" />

      <ActionsContainer>
        <a href="/">
          <MapPin weight="fill" size={20} />
          Conceição dos Ouros, MG
        </a>
        <a href="/checkout">
          <ShoppingCart weight="fill" size={20} />
        </a>
      </ActionsContainer>
    </HeaderContainer>
  )
}