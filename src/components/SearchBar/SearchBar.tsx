import React from "react";
import * as S from "./SearchBar.styles";

export default function SearchBar({
  onChange,
  tabIndex,
}: {
  onChange: (e: any) => void;
  tabIndex?: number;
}) {
  return (
    <S.SearchBar tabIndex={tabIndex}>
      <S.SearchIcon>
        <img src="icons/search.svg" alt="Search Icon" />
      </S.SearchIcon>
      <S.SearchInput onChange={onChange} type="text" placeholder="Search" />
    </S.SearchBar>
  );
}
