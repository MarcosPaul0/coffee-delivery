import {
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
} from "phosphor-react";
import {
  FormHeader,
  PaymentContainer,
  PaymentFormContainer,
  PaymentOption,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { PaymentMethodType, RegisterOrderFormData } from "../..";

export function PaymentForm() {
  const { setValue, watch } = useFormContext<RegisterOrderFormData>();

  const paymentMethod = watch("payment_method");

  function handleChangePaymentMethod(method: PaymentMethodType) {
    setValue("payment_method", method);
  }

  return (
    <PaymentFormContainer>
      <FormHeader>
        <CurrencyDollar size={20} />
        <div>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormHeader>

      <PaymentContainer>
        <PaymentOption
          type="button"
          className="active"
          isActive={paymentMethod === "credit_card"}
          onClick={() => handleChangePaymentMethod("credit_card")}
        >
          <CreditCard size={20} />
          CARTÃO DE CRÉDITO
        </PaymentOption>

        <PaymentOption
          type="button"
          isActive={paymentMethod === "debit_card"}
          onClick={() => handleChangePaymentMethod("debit_card")}
        >
          <Bank size={20} />
          CARTÃO DE DÉBITO
        </PaymentOption>

        <PaymentOption
          type="button"
          isActive={paymentMethod === "money"}
          onClick={() => handleChangePaymentMethod("money")}
        >
          <Money size={20} />
          DINHEIRO
        </PaymentOption>
      </PaymentContainer>
    </PaymentFormContainer>
  );
}
