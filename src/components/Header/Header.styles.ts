import styled from "styled-components";
import { colors, fonts, spacing } from "../../styles";
import { IoMenu } from "react-icons/io5";
import { ThemeProps } from "../../styles/themes";

export const Header = styled.header`
  background-color: ${(props: ThemeProps) => props.theme.header.backgroundColor};
  color: ${colors.white};
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%:
`;

export const UserLogo = styled.div`
  margin: ${spacing.medium}px ${spacing.large}px;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin: ${spacing.medium}px ${spacing.large}px;
`;

export const User = styled.div`
  margin: ${spacing.medium}px ${spacing.large}px;
`

export const DarkModeTitle = styled.h3`
  font-size: ${fonts.xsmall}px;
  text-align: center;
  
`

export const ToggleText = styled.p`
  margin: 0;
  text-align: center;

`

export const MenuIcon = styled(IoMenu)`
  margin-right: ${spacing.large}px;
  cursor: pointer;
`

export const DarkModeIcon = styled.div`
  margin-left: ${spacing.small}px;
` 

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const IconContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`