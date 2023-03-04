import React from "react";
import * as S from "./Select.styles";

interface SelectProps {
  value: string;
  tabIndex?: number;
  placeholder: string;
  description?: string;
  width?: number;
  height?: number;
  items: {
    id: string;
    name: string;
    value: string;
  }[];
  ref?: React.MutableRefObject<any>;
  onChange: (e: any) => void;
}

export const Select = React.forwardRef(
  (
    {
      tabIndex,
      value,
      onChange,
      height,
      width,
      description,
      placeholder,
      items,
    }: SelectProps,
    ref
  ) => {
    return (
      <S.Select
        tabIndex={tabIndex}
        value={value}
        onChange={onChange}
        height={height}
        width={width}
        ref={ref}
      >
        <S.OptionItem
          selected
          value="All"
          disabled={description ? false : true}
        >
          {description ? `${description}: ${placeholder}` : `${placeholder}`}
        </S.OptionItem>
        {items.map((item) => (
          <S.OptionItem key={item.id} value={item.value}>
            {description ? `${description}: ${item.name}` : `${item.name}`}
          </S.OptionItem>
        ))}
      </S.Select>
    );
  }
);

export default Select;
