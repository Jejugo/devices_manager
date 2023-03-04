import styled from "styled-components";

interface MenuPositionProp {
  menuPosition: {
    top: number;
    left: number;
  };
}
export const FloatingMenu = styled.menu`
  background-color: white;
  position: absolute;
  padding: 0;
  top: 20px;
  right: 10px;
  z-index: 1;
  overflow: visible;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const FloatingMenuList = styled.ul`
  width: 120px;
  list-style: none;
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  line-height: 35px;
`;
