import { render, screen } from "@testing-library/react";
import FloatingMenu from "./FloatingMenu";

describe("FloatingMenu component", () => {
  it("renders children with the correct position", () => {
    const ChildComponent = () => <div>Child component</div>;

    render(
      <FloatingMenu>
        <ChildComponent />
      </FloatingMenu>
    );

    const childComponent = screen.getByText("Child component");
    expect(childComponent).toBeInTheDocument();

    const floatingMenu = screen.getByRole("menu");
    expect(floatingMenu).toHaveStyle(`top: 20px`);
    expect(floatingMenu).toHaveStyle(`right: 10px`);
  });
});
