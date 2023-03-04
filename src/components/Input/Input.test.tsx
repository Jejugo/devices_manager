import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

it("renders input with correct props", () => {
  const mockOnChange = jest.fn();
  render(
    <Input
      type="text"
      value="Hello World"
      name="testInput"
      onChange={mockOnChange}
    />
  );

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveValue("Hello World");
  expect(input).toHaveAttribute("name", "testInput");

  const inputText = "TestValue";
  userEvent.type(input, inputText);
  expect(mockOnChange).toHaveBeenCalledTimes(inputText.length);
  expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
});
