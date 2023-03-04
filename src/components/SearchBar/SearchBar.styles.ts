import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d0d9;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #fff;
  width: 270px;
  height: 38px;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: #ccc;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  color: #333;
  font-size: 14px;

  &::placeholder {
    color: #88859e;
  }
`;
