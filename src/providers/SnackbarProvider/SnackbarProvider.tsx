import { createContext, useContext, useMemo, useState } from "react";
import Snackbar from "../../components/Snackbar/Snackbar";

type Variant = "SUCCESS" | "ERROR" | "WARNING";

interface ISnackbarContext {
  showSnackbar: (message: string, variant?: Variant) => void;
  hideSnackbar: () => void;
}

const SnackbarContext = createContext<ISnackbarContext>({
  showSnackbar: () => undefined,
  hideSnackbar: () => undefined,
});

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

interface SnackbarState {
  message: string;
  variant: Variant;
  isOpen: boolean;
  duration: number;
}

export default function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    message: "",
    isOpen: false,
    variant: "ERROR",
    duration: 3000,
  });

  const handlers = useMemo(
    () => ({
      showSnackbar: (message: string, variant: Variant = "ERROR") => {
        setSnackbarState((previousState) => ({
          ...previousState,
          isOpen: true,
          message,
          variant,
        }));
      },
      hideSnackbar: () => {
        setSnackbarState((previousState) => ({
          ...previousState,
          isOpen: false,
          message,
        }));
      },
    }),
    []
  );

  const { message, variant, duration } = snackbarState;

  return (
    <SnackbarContext.Provider value={handlers}>
      {children}
      <Snackbar
        variant={variant}
        message={message}
        duration={duration}
        isOpen={snackbarState.isOpen}
      />
    </SnackbarContext.Provider>
  );
}
