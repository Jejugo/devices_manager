import styled from "styled-components";
import { colors, spacing, fonts, radius } from "../../styles";
interface ButtonProps {
  variant: string;
  fontColor: string;
  width: number;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) => {
    switch (props.variant) {
      case "alert":
        return colors.alert;
      case "regular":
        return colors.regular;
      case "info":
        return colors.info;
    }
  }};
  font-size: ${fonts.small}px;
  color: ${(props: ButtonProps) => {
    switch (props.variant) {
      case "alert":
        return colors.white;
      case "regular":
        return colors.black;
      case "info":
        return colors.white;
    }
  }};
  border: ${(props: ButtonProps) => {
    switch (props.variant) {
      case "alert":
        return "none";
      case "regular":
        return "1px solid black";
      case "info":
        return "none";
    }
  }};
  border-radius: ${radius.small}px;
  padding: ${spacing.medium}px 0px;
  width: 100%;
  cursor: pointer;
`;
