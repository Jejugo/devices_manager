import React from "react";
import { render, screen } from "@testing-library/react";
import ListLayout from "./ListLayout";

describe("ListLayout", () => {
  it("renders without crashing", () => {
    render(
      <ListLayout
        children={<div data-testid="test-children"></div>}
        pageHeaderTitle="Test Title"
        buttonText="Test Button"
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <ListLayout
        children={<div data-testid="test-children"></div>}
        pageHeaderTitle="Test Title"
        buttonText="Test Button"
      />
    );
    expect(screen.getByTestId("test-children")).toBeInTheDocument();
  });
});
