import { render, screen, waitFor } from "@testing-library/react";
import Snackbar from "./Snackbar";

describe("Snackbar", () => {
  it("renders a closed snackbar by default", () => {
    const message = "Hello, world!";
    const variant = "SUCCESS";
    const duration = 3000;
    render(
      <Snackbar
        isOpen={true}
        message={message}
        variant={variant}
        duration={duration}
      />
    );
    const snackbar = screen.getByText(message);
    expect(snackbar).toBeInTheDocument();
    expect(snackbar).not.toHaveClass("show");
  });
  it("opens and closes the snackbar when message is passed as prop", async () => {
    const message = "Hello, world!";
    const variant = "SUCCESS";
    const duration = 3000;
    render(
      <Snackbar
        isOpen={true}
        message={message}
        variant={variant}
        duration={duration}
      />
    );

    await waitFor(
      () => {
        expect(screen.queryByTestId("snackbar")).toHaveStyle({ top: "10px" });
      },
      { timeout: duration }
    );
  });
});
