import styled from "styled-components";
import { fonts } from "../../styles";
import { ThemeProps } from "../../styles/themes";

export const FloatingMenu = styled.menu`
  background-color: ${(props: ThemeProps) => props.theme.backgroundColor};
  position: absolute;
  padding: 0;
  top: 20px;
  right: 10px;
  z-index: 1;
  overflow: visible;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  color: ${(props: ThemeProps) => props.theme.color}
`;

export const FloatingMenuList = styled.ul`
  width: 120px;
  list-style: none;
  margin: 0px;
  padding: 0px;
  font-size: ${fonts.small}px;
  line-height: 35px;
`;
