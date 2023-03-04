import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SnackbarProvider, { useSnackbar } from "./SnackbarProvider";

describe("SnackbarProvider", () => {
  it("displays a snackbar message when showSnackbar is called", async () => {
    const TestComponent = () => {
      const { showSnackbar } = useSnackbar();

      return (
        <button onClick={() => showSnackbar("Test message", "SUCCESS")}>
          Show Snackbar
        </button>
      );
    };

    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    // Click the button to trigger showSnackbar
    userEvent.click(screen.getByRole("button", { name: /show snackbar/i }));

    // Check that the snackbar message is displayed
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
  });
  it("displays a snackbar message and hides it immediately after calling hide function", async () => {
    const TestComponent = () => {
      const { showSnackbar, hideSnackbar } = useSnackbar();

      return (
        <button
          onClick={() => {
            showSnackbar("Test message", "SUCCESS");
            hideSnackbar();
          }}
        >
          Show Snackbar
        </button>
      );
    };

    render(
      <SnackbarProvider>
        <TestComponent />
      </SnackbarProvider>
    );

    // Click the button to trigger showSnackbar
    userEvent.click(screen.getByRole("button", { name: /show snackbar/i }));

    // Check that the snackbar message is displayed
    expect(screen.queryByText(/test message/i)).not.toBeInTheDocument();
  });
});
