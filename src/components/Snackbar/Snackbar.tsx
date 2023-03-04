import React from "react";
import * as S from "./Snackbar.styles";

type Variant = "SUCCESS" | "ERROR" | "WARNING";

interface SnackbarProps {
  message: string;
  variant: Variant;
  show: boolean;
}

const Snackbar = ({ message, variant, show }: SnackbarProps) => {
  return (
    <S.Snackbar variant={variant} show={show}>
      {message}
    </S.Snackbar>
  );
};

export default Snackbar;
