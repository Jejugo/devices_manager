import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button component", () => {
  it("renders the button with the given title", () => {
    render(<Button title="Click me" type="button" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click me" type="button" onClick={handleClick} />);
    userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders a button with the correct type attribute", () => {
    render(<Button title="Click me" type="submit" />);
    const button = screen.getByText("Click me");
    expect(button.getAttribute("type")).toBe("submit");
  });
});
