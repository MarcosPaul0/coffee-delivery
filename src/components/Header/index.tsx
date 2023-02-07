import { NavigationContainer, HeaderContainer, CartLink } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';

import logoImg from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useCartContext();

  return (
    <HeaderContainer>
      <img src={logoImg} alt="Logo Coffee Delivery" />

      <NavigationContainer>
        <Link to="/">
          <MapPin weight="fill" size={20} />
          Conceição dos Ouros, MG
        </Link>
        <CartLink $itemsQuantity={cart.length} to="/checkout">
          <ShoppingCart weight="fill" size={20} />
        </CartLink>
      </NavigationContainer>
    </HeaderContainer>
  )
}