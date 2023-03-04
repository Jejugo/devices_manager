import { createContext, useContext, useMemo, useState } from "react";
import Snackbar from "../components/Snackbar/Snackbar";

type Variant = "SUCCESS" | "ERROR" | "WARNING";

interface ISnackbarContext {
  showSnackbar: (message: string, variant?: Variant) => void;
}

const SnackbarContext = createContext<ISnackbarContext>({
  showSnackbar: () => undefined,
});

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

interface SnackbarState {
  message: string;
  variant: Variant;
}

export default function SnackbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    message: "",
    variant: "ERROR",
  });

  const handlers = useMemo(
    () => ({
      showSnackbar: (message: string, variant: Variant = "ERROR") => {
        setSnackbarState((previousState) => ({
          ...previousState,
          message,
          variant,
        }));
      },
    }),
    []
  );

  const { message, variant } = snackbarState;

  return (
    <SnackbarContext.Provider value={handlers}>
      {children}
      <Snackbar show={message.length > 0} variant={variant} message={message} />
    </SnackbarContext.Provider>
  );
}
