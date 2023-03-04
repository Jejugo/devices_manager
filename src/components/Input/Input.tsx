import React, { useRef } from "react";
import * as S from "./Input.styles";

interface FormInputProps {
  type?: string;
  value: string;
  name: string;
  ref?: React.MutableRefObject<any>;
  onChange: (e: any) => void;
}

export const FormInput = React.forwardRef(
  ({ type, value, onChange, name }: FormInputProps, ref) => {
    return (
      <S.Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        ref={ref}
      ></S.Input>
    );
  }
);

export default FormInput;
