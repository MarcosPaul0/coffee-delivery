import { Trash } from "phosphor-react";
import { QuantityButton } from "../QuantityButton";

import coffeeImg from "../../assets/traditional.svg";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { ActionsContainer, CoffeeItemContainer, InfoContainer } from "./styles";

export function CoffeeItem() {
  const { purple_500 } = useContext(ThemeContext);

  return (
    <CoffeeItemContainer>
      <img src={coffeeImg} alt="Imagem do café" />

      <InfoContainer>
        <h2>Expresso Tradicional</h2>

        <ActionsContainer>
          <QuantityButton counter={1} />
          <button>
            <Trash size={20} color={purple_500} />
            REMOVER
          </button>
        </ActionsContainer>
      </InfoContainer>

      <span>R$ 9,99</span>
    </CoffeeItemContainer>
  );
}
