import React from "react";
import * as S from "./Input.styles";

interface InputProps {
  type?: string;
  value: string;
  name: string;
  ref?: React.MutableRefObject<any>;
  noBorder?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = React.forwardRef(
  ({ type, value, onChange, name, noBorder }: InputProps, ref) => {
    return (
      <S.Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        ref={ref}
        noBorder={noBorder}
      ></S.Input>
    );
  }
);

export default Input;
