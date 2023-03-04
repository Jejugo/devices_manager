import styled from "styled-components";

interface MenuPositionProp {
  menuPosition: {
    top: number;
    left: number;
  };
}

export const FloatingMenu = styled.ul`
  width: 120px;
  background-color: white;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: ${(prop: MenuPositionProp) => {
    return prop.menuPosition.top;
  }}px;
  left: ${(prop: MenuPositionProp) => {
    return prop.menuPosition.left - 100;
  }}px;
  z-index: 1;
  font-size: 14px;
  line-height: 35px;
  list-style: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
