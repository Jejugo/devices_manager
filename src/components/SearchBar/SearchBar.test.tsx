import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders a search input field", () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls onChange callback when search input changes", () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);
    const searchInput = screen.getByPlaceholderText("Search");
    userEvent.type(searchInput, "Hello");
    expect(onChange).toHaveBeenCalledTimes(5);
    expect(searchInput).toHaveValue("Hello");
  });

  it("renders a search icon", () => {
    const onChange = jest.fn();
    render(<SearchBar onChange={onChange} />);
    const searchIcon = screen.getByAltText("Search Icon");
    expect(searchIcon).toBeInTheDocument();
  });
});
