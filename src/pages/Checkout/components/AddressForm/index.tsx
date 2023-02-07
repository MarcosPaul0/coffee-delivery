import { MapPinLine } from "phosphor-react";
import {
  AddressFormContainer,
  ErrorMessage,
  FormBody,
  FormHeader,
  Input,
  InputsContainer,
} from "./styles";
import { useFormContext } from "react-hook-form";
import { RegisterOrderFormData } from "../..";

export function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterOrderFormData>();

  return (
    <AddressFormContainer>
      <FormHeader>
        <MapPinLine size={20} />

        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeader>

      <FormBody>
        <InputsContainer columns="0.357fr">
          <Input type="text" placeholder="CEP" {...register("postal_code")} />
        </InputsContainer>

        <InputsContainer columns="1fr">
          <Input type="text" placeholder="Rua" {...register("street")} />
        </InputsContainer>

        <InputsContainer columns="0.364fr 0.636fr">
          <Input type="number" placeholder="Número" {...register("number")} />
          <Input
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </InputsContainer>

        <InputsContainer columns="0.373fr 0.514fr 0.113fr">
          <Input type="text" placeholder="Bairro" {...register("district")} />
          <Input type="text" placeholder="Cidade" {...register("city")} />
          <Input type="text" placeholder="UF" {...register("state")} />
        </InputsContainer>

        {errors.state && <ErrorMessage>{errors.state?.message}</ErrorMessage>}
        {errors.postal_code && (
          <ErrorMessage>{errors.postal_code?.message}</ErrorMessage>
        )}
      </FormBody>
    </AddressFormContainer>
  );
}
