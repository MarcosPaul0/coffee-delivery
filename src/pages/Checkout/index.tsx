import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Input } from "../../components/Input";
import {
  CheckoutContainer,
  FormHeader,
  FormContainer,
  InputsContainer,
  PaymentContainer,
  Title,
  CoffeesSelectedContainer,
  ConfirmButton,
  OrderDetailsContainer,
} from "./styles";

import coffeeImg from "../../assets/traditional.svg";
import { QuantityButton } from "../../components/QuantityButton";
import { CoffeeItem } from "../../components/CoffeeItem";

export function Checkout() {
  const { purple_500, yellow_800 } = useContext(ThemeContext);

  return (
    <CheckoutContainer>
      <form>
        <FormContainer>
          <Title>Complete seu pedido</Title>

          <div>
            <FormHeader>
              <MapPinLine size={20} color={yellow_800} />

              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>

            <InputsContainer>
              <div>
                <Input type="text" placeholder="CEP" width={40} />
              </div>
              <div>
                <Input type="text" placeholder="Rua" width={100} />
              </div>
              <div>
                <Input type="text" placeholder="Número" width={40} />
                <Input type="text" placeholder="Complemento" width={60} />
              </div>
              <div>
                <Input type="text" placeholder="Bairro" width={42} />
                <Input type="text" placeholder="Cidade" width={49.3} />
                <Input type="text" placeholder="UF" width={10.7} />
              </div>
            </InputsContainer>
          </div>

          <div>
            <FormHeader>
              <CurrencyDollar size={20} color={purple_500} />
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>

            <PaymentContainer>
              <button className="active">
                <CreditCard size={20} color={purple_500} />
                CARTÃO DE CRÉDITO
              </button>

              <button>
                <Bank size={20} color={purple_500} />
                CARTÃO DE DÉBITO
              </button>

              <button>
                <Money size={20} color={purple_500} />
                DINHEIRO
              </button>
            </PaymentContainer>
          </div>
        </FormContainer>

        <CoffeesSelectedContainer>
          <Title>Cafés selecionados</Title>

          <div>
            <ul>
              <CoffeeItem />
            </ul>

            <OrderDetailsContainer>
              <p>
                <span>Total de itens</span>
                <span>R$ 32,50</span>
              </p>

              <p>
                <span>Entrega</span>
                <span>R$ 32,50</span>
              </p>

              <p>
                <strong>Total</strong>
                <strong>R$ 65,00</strong>
              </p>
            </OrderDetailsContainer>

            <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
          </div>
        </CoffeesSelectedContainer>
      </form>
    </CheckoutContainer>
  );
}
