import * as S from "./FormInput.styles";
import { useController } from "react-hook-form";
import Input from "../Input/Input";

interface IInput {
  value?: string;
  type?: string;
  name: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export default function FormInput({ label, type, name }: IInput) {
  const {
    field: { ...fieldProps },
    fieldState,
  } = useController({ name, rules: { required: true } });

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <Input type={type} {...fieldProps}></Input>
      <S.ErrorMessage>
        {fieldState.error ? "This field is required" : null}
      </S.ErrorMessage>
    </S.InputContainer>
  );
}
