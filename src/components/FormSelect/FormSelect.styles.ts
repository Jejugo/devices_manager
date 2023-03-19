import styled from "styled-components";
import { fonts, radius, spacing } from "../../styles";
import { ThemeProps } from "../../styles/themes";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacing.medium}px;
`;

export const Label = styled.label`
  margin-bottom: ${radius.small}px;
  color: ${(props: ThemeProps) => props.theme.color}
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: ${fonts.xsmall}px;
`;
