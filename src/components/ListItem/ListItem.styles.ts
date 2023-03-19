import styled from "styled-components";
import { colors, fonts, radius, spacing } from "../../styles";
import { ThemeProps } from "../../styles/themes";

export const ListItem = styled.section`
  height: 36px;
  padding: ${spacing.small}px 0px ${spacing.small}px ${spacing.medium}px;
  border-bottom: 1px #e7e8eb solid;
  &:hover {
    background-color: ${colors.lightGrey};

    h2 {
      color: ${(props: ThemeProps) => props.theme.listItem.hover.color};
    }
  }
`;

export const ListTitle = styled.h2`
  font-size: ${fonts.small}px;
  margin: 0;
`;

export const ListSubtitle = styled.p`
  font-size: ${fonts.xsmall}px;
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
  position: relative;
  margin-right: ${spacing.medium}px;
  width: ${spacing.xlarge}px;
  height: ${spacing.xlarge}px;
  cursor: pointer;
  background-color: ${colors.grey};
  border-radius: ${radius.small}px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:children {
    cursor: pointer;
  }
`;

export const FloatingMenuItem = styled.li``;

export const FloatingMenuItemAnchor = styled.a`
  padding-left: ${spacing.small}px;
  display: block;
  &:hover {
    background-color: ${colors.lightGrey};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SystemLogo = styled.img`
  margin-right: ${spacing.small}px;
`;

export const ButtonWrapper = styled.div`
  width: 131px;
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.small}px;
`