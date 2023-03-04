import { useEffect, useState } from "react";
import * as S from "./Snackbar.styles";
import { useSnackbar } from "../../providers/SnackbarProvider/SnackbarProvider";

type Variant = "SUCCESS" | "ERROR" | "WARNING";
interface SnackbarProps {
  message: string;
  variant: Variant;
  duration: number;
  isOpen: boolean;
}

const Snackbar = ({ isOpen, message, variant, duration }: SnackbarProps) => {
  const { hideSnackbar } = useSnackbar();
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      timeout = setTimeout(() => {
        hideSnackbar();
      }, duration);
    }
    return () => clearTimeout(timeout);
  }, [duration, isOpen]);
  return (
    <S.Snackbar data-testid="snackbar" variant={variant} show={isOpen}>
      {message}
    </S.Snackbar>
  );
};

export default Snackbar;
