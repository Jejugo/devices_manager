import React from "react";
import * as S from "./SearchBar.styles";

export default function SearchBar({
  onChange,
}: {
  onChange: (e: any) => void;
}) {
  return (
    <S.SearchBar>
      <S.SearchIcon>
        <img src="icons/search.png" alt="Search Icon" />
      </S.SearchIcon>
      <S.SearchInput onChange={onChange} type="text" placeholder="Search" />
    </S.SearchBar>
  );
}
