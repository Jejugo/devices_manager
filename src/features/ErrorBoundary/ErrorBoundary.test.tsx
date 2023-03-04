import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary component", () => {
  const ChildComponent = () => {
    throw new Error("Test error");
  };

  it("renders fallback UI when an error is thrown", () => {
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );
    expect(
      screen.getByText(
        "Whoops! Looks like someone spilled coffee on the code. We're working on cleaning it up, but in the meantime, please try not to spill anything else on our work!"
      )
    ).toBeInTheDocument();
    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });

  it("toggles error details when toggle details button is clicked", async () => {
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Toggle details/i));

    expect(await screen.findByText(/Error:/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/Toggle details/i));

    await waitFor(() =>
      expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument()
    );
  });
});
