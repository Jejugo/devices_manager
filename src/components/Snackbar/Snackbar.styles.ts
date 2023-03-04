import styled from "styled-components";
import { colors, fonts } from "../../styles";

type Variant = "SUCCESS" | "ERROR" | "WARNING";

interface SnackbarStyle {
  variant: Variant;
  show: boolean;
}

const getBackgroundColor = (variant: Variant) => {
  switch (variant) {
    case "SUCCESS":
      return colors.success;
    case "ERROR":
      return colors.alert;
    case "WARNING":
      return colors.warning;
    default:
      return "#333";
  }
};
const getTextColor = (variant: Variant) => {
  switch (variant) {
    case "SUCCESS":
      return "#000";
    case "WARNING":
    case "ERROR":
      return "#fff";
    default:
      return "#fff";
  }
};

export const Snackbar = styled.div<SnackbarStyle>`
  position: fixed;
  top: ${(props: SnackbarStyle) => (props.show ? "10px" : "-50px")};
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ variant }: { variant: Variant }) =>
    getBackgroundColor(variant)};
  color: ${({ variant }: { variant: Variant }) => getTextColor(variant)};
  font-size: ${fonts.medium}px;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 4px;
  z-index: 9999;
  opacity: ${(props: SnackbarStyle) => (props.show ? 1 : 0)};
  transition: 0.5s ease;
`;
