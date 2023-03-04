import { render, screen } from "@testing-library/react";
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
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
  });

  it("toggles error details when toggle details button is clicked", () => {
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Test error/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Toggle details/i));
    expect(screen.getByText(/Error:/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Toggle details/i));
    expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument();
  });
});
