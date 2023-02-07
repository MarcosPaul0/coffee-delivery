import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Item, SuccessContainer, Topic, TopicsContainer } from "./styles";

import deliverymanImg from "../../assets/deliveryman.svg";
import { useLocation } from "react-router-dom";
import { PaymentMethodType } from "../Checkout";

interface Order {
  city: string;
  street: string;
  number: string;
  state: string;
  district: string;
  paymentMethod: PaymentMethodType;
}

const PAYMENT_METHOD = {
  credit_card: "Cartão de Crédito",
  debit_card: "Cartão de Débito",
  money: "Dinheiro",
} as const;

// TODO adicionar responsividade
export function Success() {
  const location = useLocation();

  const { city, district, number, paymentMethod, state, street } =
    location.state as Order;

  const paymentMethodFormatted = PAYMENT_METHOD[paymentMethod];

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
                Entrega em <strong>{street}</strong>, {number}, {district} -{" "}
                {city}, {state}
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
                Pagamento na entrega <strong>{paymentMethodFormatted}</strong>
              </span>
            </Topic>
          </div>
        </TopicsContainer>
      </div>

      <img src={deliverymanImg} alt="Homem realizando uma entrega de moto" />
    </SuccessContainer>
  );
}
