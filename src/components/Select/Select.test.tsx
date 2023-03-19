import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";
import { lightTheme } from "../../styles/themes";
import { ThemeProvider } from 'styled-components'

const items = [
  { id: "1", name: "Option 1", value: "option1" },
  { id: "2", name: "Option 2", value: "option2" },
  { id: "3", name: "Option 3", value: "option3" },
];

it("renders select with correct props", () => {
  const mockOnChange = jest.fn();
  render(
    <ThemeProvider theme={lightTheme}>
    <Select
      value="option1"
      placeholder="Select an option"
      description="Choose an option"
      items={items}
      onChange={mockOnChange}
      width={200}
      height={40}
    />
    </ThemeProvider>
  );

  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(select).toHaveValue("option1");
  expect(
    screen.getByText("Choose an option: Select an option")
  ).toBeInTheDocument();
  expect(screen.getByText("Choose an option: Option 2")).toBeInTheDocument();

  userEvent.selectOptions(select, "option2");
  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
});
