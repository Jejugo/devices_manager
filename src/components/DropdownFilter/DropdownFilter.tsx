import React, { useState } from "react";
import * as S from "./DropdownFilter.styles";

export default function DropdownFilter({
  title,
  items,
  value,
  onChange,
}: {
  title: string;
  items: {
    id: string;
    name: string;
  }[];
  value: string;
  onChange: (e: any) => void;
}) {
  return (
    <S.DropdownFilter id="sortDropdown" value={value} onChange={onChange}>
      <option value="All">{title}: All</option>
      {items.map((item) => (
        <option
          key={item.id}
          value={item.name}
        >{`${title}: ${item.name}`}</option>
      ))}
    </S.DropdownFilter>
  );
}
