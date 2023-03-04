import styled from "styled-components";

export const ListItem = styled.div`
  height: 36px;
  padding: 8px 0px 8px 13px;
  border-bottom: 1px #e7e8eb solid;
  &:hover {
    background-color: #f4f4f5;
  }
`;

export const ListTitle = styled.h2`
  font-size: 14px;
  margin: 0;
`;

export const ListSubtitle = styled.p`
  font-size: 12px;
  margin: 0;
  color: #6e6d7a;
`;

export const ListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.div``;

export const ItemMenu = styled.div`
  margin-right: 12px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-color: #e8e8ea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatingMenuItem = styled.li`
  cursor: pointer;
`;

export const FloatingMenuItemAnchor = styled.a`
  padding-left: 10px;
  display: block;
  &:hover {
    background-color: #eee;
  }
`;
