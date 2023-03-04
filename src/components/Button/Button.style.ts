import styled from "styled-components";
import { colors, spacing, fonts } from "../../styles";
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
  border-radius: ${spacing.radius.medium}px;
  padding: ${spacing.medium}px ${spacing.medium}px;
  width: ${(props: ButtonProps) => `${props.width}px` || "auto"};
  cursor: pointer;
`;
