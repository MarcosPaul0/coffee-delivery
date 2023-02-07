import { Trash } from "phosphor-react";
import { QuantityButton } from "../../../../components/QuantityButton";

import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { ActionsContainer, CoffeeItemContainer, InfoContainer } from "./styles";
import { useCartContext } from "../../../../contexts/CartContext";

interface CoffeeItemProps {
  coffee: {
    id: number;
    name: string;
    quantity: number;
    url: string;
    amount: string;
  };
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const { purple_500 } = useContext(ThemeContext);
  
  const { incrementCartItem, decrementCartItem, removeCartItem } = useCartContext();

  return (
    <CoffeeItemContainer>
      <img src={coffee.url} alt="Imagem do café" />

      <InfoContainer>
        <h2>{coffee.name}</h2>

        <ActionsContainer>
          <QuantityButton
            counter={coffee.quantity}
            onIncrement={() => incrementCartItem(coffee.id)}
            onDecrement={() => decrementCartItem(coffee.id)}
          />
          <button type="button" onClick={() => removeCartItem(coffee.id)}>
            <Trash size={20} color={purple_500} />
            REMOVER
          </button>
        </ActionsContainer>
      </InfoContainer>

      <span>{coffee.amount}</span>
    </CoffeeItemContainer>
  );
}
