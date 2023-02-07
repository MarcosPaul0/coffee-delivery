import { Minus, Plus } from "phosphor-react";
import { QuantityButtonContainer } from "./styles";

export interface QuantityButtonProps {
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// TODO mudar o nome do componente
export function QuantityButton({
  counter,
  onIncrement,
  onDecrement,
}: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button type="button" onClick={onDecrement}>
        <Minus size={10} />
      </button>

      <span>{counter}</span>

      <button type="button" onClick={onIncrement}>
        <Plus size={13} />
      </button>
    </QuantityButtonContainer>
  );
}
