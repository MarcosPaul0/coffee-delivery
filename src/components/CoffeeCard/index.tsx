import { ShoppingCart } from "phosphor-react";

import { QuantityButton } from "../QuantityButton";
import { BuyContainer, CoffeeCardContainer } from "./styles";

interface CoffeeCardProps {
  url: string;
  name: string;
}

export function CoffeeCard({ name, url }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={url} alt={name} />
      <span>Tradicional</span>
      <h2>{name}</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <span>
          9,90
        </span>

        <QuantityButton counter={1} />

        <button>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}