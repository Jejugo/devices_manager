import styled from "styled-components";
import { radius, spacing } from "../../styles";
import media from "../../styles/media";
import { ThemeProps } from "../../styles/themes";

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d0d9;
  border-radius: ${radius.small}px;
  padding: 5px 10px;
  background-color: ${(props: ThemeProps) => props.theme.input.backgroundColor};
  width: 270px;
  height: 38px;
  

  &:focus-within {
    outline: 2px solid #0078d4;
  }

  ${media.md`
    padding: 0px 10px;
    wdith: 100%;
  `}
  
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${spacing.small}px;
  color: #ccc;
`;


