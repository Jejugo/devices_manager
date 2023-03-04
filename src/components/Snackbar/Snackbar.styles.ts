import styled from "styled-components";

type Variant = "SUCCESS" | "ERROR" | "WARNING";

interface SnackbarStyle {
  variant: Variant;
  show: boolean;
}

export const Snackbar = styled.div<SnackbarStyle>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props: SnackbarStyle) =>
    props.variant === "SUCCESS"
      ? "#4CAF50"
      : props.variant === "ERROR"
      ? "#F44336"
      : "#FFC107"};
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 32px;
  border-radius: 4px;
  z-index: 9999;
  opacity: ${(props: SnackbarStyle) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
