import React from "react";
import * as S from "./SearchBar.styles";
import { Input } from "../Input/Input.styles";

export default function SearchBar({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <S.SearchBar>
      <S.SearchIcon>
        <img src="icons/search.svg" alt="Search Icon" />
      </S.SearchIcon>
      <Input onChange={onChange} type="text" placeholder="Search" noBorder/>
    </S.SearchBar>
  );
}
