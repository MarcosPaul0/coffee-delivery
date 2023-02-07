import {
  Title,
  CoffeesSelectedContainer,
  CheckoutContainer,
  FormContainer,
} from "./styles";

import { useCartContext } from "../../contexts/CartContext";
import { transformNumberToReal } from "../../utils/transformNumberToReal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../../services/api";
import { ApiRoutes } from "../../constants/apiRoutes";
import { useNotify } from "../../hooks/useNotify";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/appRoutes";
import { FormProvider } from "react-hook-form";
import { ConfirmForm } from "./components/ConfirmForm";
import { AddressForm } from "./components/AddressForm";
import { PaymentForm } from "./components/PaymentForm";

export type PaymentMethodType = "credit_card" | "debit_card" | "money";

const registerOrderSchema = z.object({
  postal_code: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, {
      message: "CEP inválido",
    })
    .transform((postalCode) => postalCode.replace("-", "")),
  street: z.string(),
  number: z.string().refine((number) => !Number.isNaN(parseInt(number))),
  complement: z.string().nullable(),
  district: z.string(),
  city: z.string(),
  state: z
    .string()
    .length(2, {
      message: "Sigla do estado inválida",
    })
    .transform((state) => state.toUpperCase()),
  payment_method: z.string(),
});

export type RegisterOrderFormData = z.infer<typeof registerOrderSchema>;

// TODO adicionar responsividade
export function Checkout() {
  const { errorNotify } = useNotify();

  const { cart, resetCart } = useCartContext();

  const navigate = useNavigate();

  const methods = useForm<RegisterOrderFormData>({
    resolver: zodResolver(registerOrderSchema),
    defaultValues: {
      payment_method: "credit_card",
    },
  });

  const { handleSubmit } = methods;

  const itemsAmount = cart.reduce(
    (accumulator, item) => accumulator + item.amount,
    0
  );
  const formattedItemsAmount = transformNumberToReal(itemsAmount);

  const fakeDeliveryAmount = cart.length > 0 ? 32.5 : 0;
  const formattedDeliveryAmount = transformNumberToReal(fakeDeliveryAmount);

  const totalAmount = itemsAmount + fakeDeliveryAmount;
  const formattedTotalAmount = transformNumberToReal(totalAmount);

  async function registerOrder(data: RegisterOrderFormData) {
    try {
      await api.post(ApiRoutes.ORDERS, {
        ...data,
        total_amount: totalAmount,
        items: cart.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          amount: item.amount,
        })),
      });

      resetCart();
      navigate(AppRoutes.SUCCESS, {
        state: {
          city: data.city,
          street: data.street,
          number: data.number,
          state: data.state,
          district: data.district,
          paymentMethod: data.payment_method,
        },
      });
    } catch {
      errorNotify("Ocorreu algum error ao registrar seu pedido");
    }
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer onSubmit={handleSubmit(registerOrder)}>
        <FormContainer>
          <Title>Complete seu pedido</Title>

          <AddressForm />

          <PaymentForm />
        </FormContainer>

        <CoffeesSelectedContainer>
          <Title>Cafés selecionados</Title>

          <ConfirmForm
            itemsAmount={formattedItemsAmount}
            deliveryAmount={formattedDeliveryAmount}
            totalAmount={formattedTotalAmount}
          />
        </CoffeesSelectedContainer>
      </CheckoutContainer>
    </FormProvider>
  );
}
