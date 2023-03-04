import styled from "styled-components";
import { spacing } from "../../styles";

export const Header = styled.header`
  background-color: #002a42;
  color: white;
  display: flex;
  align-items: center;
  height: 50px;
`;

export const UserLogo = styled.div`
  margin: ${spacing.medium}px ${spacing.large}px;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin: ${spacing.medium}px ${spacing.large}px;
`;
