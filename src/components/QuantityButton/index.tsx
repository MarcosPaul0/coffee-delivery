import { QuantityButtonContainer } from "./styles";

export interface QuantityButtonProps {
  counter: number;
}

export function QuantityButton({ counter }: QuantityButtonProps) {
  return (
    <QuantityButtonContainer>
      <button>-</button>
      <span>{counter}</span>
      <button>+</button>
    </QuantityButtonContainer>
  );
}
