import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
}

export function Input({ width, ...rest }: InputProps) {
  return <InputContainer width={width} type="text" {...rest} />;
}
