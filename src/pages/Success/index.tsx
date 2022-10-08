import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Item, SuccessContainer, Topic, TopicsContainer } from "./styles";

import deliverymanImg from "../../assets/deliveryman.svg";

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <TopicsContainer>
          <div>
            <Topic>
              <Item bgColor="purple">
                <MapPin size={20} />
              </Item>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli</strong>, 102,
                Farrapos - Porto Alegre, RS
              </span>
            </Topic>

            <Topic>
              <Item bgColor="yellow">
                <Timer size={20} />
              </Item>
              <span>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </span>
            </Topic>

            <Topic>
              <Item bgColor="darkYellow">
                <CurrencyDollar size={20} />
              </Item>
              <span>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </span>
            </Topic>
          </div>
        </TopicsContainer>
      </div>

      <img src={deliverymanImg} alt="Homem realizando uma entrega de moto" />
    </SuccessContainer>
  );
}
