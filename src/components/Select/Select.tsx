import { useController } from "react-hook-form";
import * as S from "./Select.styles";

interface ISelect {
  value?: string;
  type?: string;
  name: string;
  items: {
    id: string;
    name: string;
  }[];
  onChange?: (value: string) => void;
  label?: string;
  placeholder: string;
}

export default function Select({ label, placeholder, items, name }: ISelect) {
  const {
    field: { value, ...fieldProps },
    fieldState,
  } = useController({ name, rules: { required: true } });

  console.log("select->", value);

  return (
    <S.SelectContainer>
      <S.Label>{label}</S.Label>
      <S.Select {...fieldProps}>
        <S.OptionItem disabled selected>
          {placeholder}
        </S.OptionItem>
        {items.map((item) => (
          <S.OptionItem value={item.name}>{item.name}</S.OptionItem>
        ))}
        {fieldState.error ? "This field is required" : null}
      </S.Select>
    </S.SelectContainer>
  );
}
