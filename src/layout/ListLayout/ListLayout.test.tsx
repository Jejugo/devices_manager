import React from "react";
import { render, screen } from "@testing-library/react";
import ListLayout from "./ListLayout";
import { ThemeProvider } from 'styled-components'
import { lightTheme } from "../../styles/themes";

describe("ListLayout", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ListLayout
          children={<div data-testid="test-children"></div>}
          pageHeaderTitle="Test Title"
          buttonText="Test Button"
        />
      </ThemeProvider>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ListLayout
          children={<div data-testid="test-children"></div>}
          pageHeaderTitle="Test Title"
          buttonText="Test Button"
        />
      </ThemeProvider>
    );
    expect(screen.getByTestId("test-children")).toBeInTheDocument();
  });
});
