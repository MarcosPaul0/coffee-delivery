import { RegisterOrderFormData } from "../..";
import { Button } from "../../../../components/Button";
import { useCartContext } from "../../../../contexts/CartContext";
import { transformNumberToReal } from "../../../../utils/transformNumberToReal";
import { CoffeeItem } from "../CoffeeItem";
import { ConfirmFormContainer, OrderContainer } from "./styles";
import { useFormContext } from "react-hook-form";

interface ConfirmFormProps {
  itemsAmount: string;
  deliveryAmount: string;
  totalAmount: string;
}

export function ConfirmForm({
  itemsAmount,
  deliveryAmount,
  totalAmount,
}: ConfirmFormProps) {
  const { cart } = useCartContext();

  const {
    formState: { isSubmitting },
  } = useFormContext<RegisterOrderFormData>();

  const submitIsDisabled = isSubmitting || cart.length <= 0;

  return (
    <ConfirmFormContainer>
      <ul>
        {cart.map((item) => (
          <CoffeeItem
            key={item.id}
            coffee={{
              id: item.id,
              name: item.name,
              url: item.url,
              quantity: item.quantity,
              amount: transformNumberToReal(item.amount),
            }}
          />
        ))}
      </ul>

      <OrderContainer>
        <p>
          <span>Total de itens</span>
          <span>{itemsAmount}</span>
        </p>

        <p>
          <span>Entrega</span>
          <span>{deliveryAmount}</span>
        </p>

        <p>
          <strong>Total</strong>
          <strong>{totalAmount}</strong>
        </p>
      </OrderContainer>

      <Button
        text="CONFIRMAR PEDIDO"
        type="submit"
        disabled={submitIsDisabled}
      />
    </ConfirmFormContainer>
  );
}
