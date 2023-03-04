import React from "react";
import * as S from "./Input.styles";
import { useController } from "react-hook-form";

interface IInput {
  value?: string;
  type?: string;
  name: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export default function Input({ label, type, name }: IInput) {
  const {
    field: { ...fieldProps },
    fieldState,
  } = useController({ name, rules: { required: true } });

  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input type={type} {...fieldProps}></S.Input>
      <S.ErrorMessage>
        {fieldState.error ? "This field is required" : null}
      </S.ErrorMessage>
    </S.InputContainer>
  );
}
