import { CoffeesList, Hero, Item, ItemsContainer } from "./styles";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import heroCoffeeImg from "../../assets/heroCoffee.svg";
import { CoffeeCard } from "../../components/CoffeeCard";
import { useState } from "react";

interface Coffee {
  type: string;
  quantity: number;
}

export function Home() {
  const [coffees, setCoffees] = useState([]);

  return (
    <div>
      <Hero>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver a qualquer
            hora
          </p>

          <ItemsContainer>
            <span>
              <Item bgColor="darkYellow">
                <ShoppingCart weight="fill" size={20} />
              </Item>
              Compra simples e segura
            </span>
            <span>
              <Item bgColor="brown">
                <Package weight="fill" size={20} />
              </Item>
              Embalagem mantém o café intacto
            </span>
            <span>
              <Item bgColor="yellow">
                <Timer weight="fill" size={20} />
              </Item>
              Entrega rápida e rastreada
            </span>
            <span>
              <Item bgColor="purple">
                <Coffee weight="fill" size={20} />
              </Item>
              O café chega fresquinho até você
            </span>
          </ItemsContainer>
        </div>

        <img src={heroCoffeeImg} alt="Copo de café" />
      </Hero>

      <CoffeesList>
        <h1>Nossos cafés</h1>

        <div>
          <CoffeeCard />
        </div>
      </CoffeesList>
    </div>
  );
}
