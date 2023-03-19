import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { lightTheme } from "../../styles/themes";
import { ThemeProvider } from 'styled-components'

describe("Header", () => {
  const HeaderComponent = () => {
    return (
      <ThemeProvider theme={lightTheme}>
        <Header />
      </ThemeProvider>
    )
  }
  it("renders with logo", () => {
    render(<HeaderComponent />);
    const logo = screen.getByAltText("NinjaOneLogo");
    expect(logo).toBeInTheDocument();
  });

  it("has correct background color and height", () => {
    render(<HeaderComponent />);
    const header = screen.getByRole("banner");
    expect(header).toHaveStyle(`
      background-color: #002a42;
      height: 50px;
    `);
  });

  it("Logo has correct margin", () => {
    render(<HeaderComponent />);
    const logo = screen.getByAltText("NinjaOneLogo");
    expect(logo).toHaveStyle(`
      margin: 12px 24px;
    `);
  });
});
