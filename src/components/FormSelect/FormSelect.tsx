import { useController } from "react-hook-form";
import * as S from "./FormSelect.styles";
import Select from "../Select/Select";

interface SelectProps {
  value?: string;
  type?: string;
  name: string;
  items: {
    id: string;
    name: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
  label?: string;
  placeholder: string;
}

export default function FormSelect({
  label,
  placeholder,
  items,
  name,
}: SelectProps) {
  const {
    field: { value, ...fieldProps },
    fieldState,
  } = useController({ name, rules: { required: true } });

  return (
    <S.SelectContainer>
      <S.Label>{label}</S.Label>
      <Select
        value={value}
        placeholder={placeholder}
        items={items}
        height={38}
        {...fieldProps}
      />
      <S.ErrorMessage>
      {fieldState.error ? "This field is required" : null}
      </S.ErrorMessage>
    </S.SelectContainer>
  );
}
