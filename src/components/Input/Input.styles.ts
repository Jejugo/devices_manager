import styled from "styled-components";
import { fonts, spacing } from "../../styles";
import { ThemeProps } from "../../styles/themes";

type InputProps = ThemeProps & {
  noBorder: boolean
}


export const Input = styled.input`
  outline: none;
  border: ${(props: InputProps) => props.noBorder ? 'none' : '1px solid #48446940'};
  border-radius: 4px;
  max-width: 100%;
  height: 38px;
  font-size: ${fonts.small}px;
  padding: 0px ${spacing.medium}px;
  background-color: ${(props: InputProps) => props.theme.input.backgroundColor};
  color: ${(props: InputProps) => props.theme.color};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
`;
