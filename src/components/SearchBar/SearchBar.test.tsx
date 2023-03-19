import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import { lightTheme } from "../../styles/themes";
import { ThemeProvider } from 'styled-components';



describe("SearchBar", () => {
  const onChange = jest.fn();
  
  const SearchBarComponent = () => {
    return (
      <ThemeProvider theme={lightTheme}>
        <SearchBar onChange={onChange} />
      </ThemeProvider>
    )
  }

  it("renders a search input field", () => {
    render(<SearchBarComponent />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls onChange callback when search input changes", () => {
    render(<SearchBarComponent />);
    const searchInput = screen.getByPlaceholderText("Search");
    userEvent.type(searchInput, "Hello");
    expect(onChange).toHaveBeenCalledTimes(5);
    expect(searchInput).toHaveValue("Hello");
  });

  it("renders a search icon", () => {
    render(<SearchBarComponent />);
    const searchIcon = screen.getByAltText("Search Icon");
    expect(searchIcon).toBeInTheDocument();
  });
});
