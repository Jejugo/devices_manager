import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders with logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("NinjaOneLogo");
    expect(logo).toBeInTheDocument();
  });

  it("has correct background color and height", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toHaveStyle(`
      background-color: #002a42;
      height: 50px;
    `);
  });

  it("Logo has correct margin", () => {
    render(<Header />);
    const logo = screen.getByAltText("NinjaOneLogo");
    expect(logo).toHaveStyle(`
      margin: 12px 24px;
    `);
  });
});
