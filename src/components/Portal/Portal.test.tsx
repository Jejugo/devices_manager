import React from "react";
import { render, screen } from "@testing-library/react";
import ReactPortal from "./Portal";

describe("ReactPortal", () => {
  let wrapper: HTMLElement;

  beforeEach(() => {
    // create a div with id 'wrapper' to use as the portal target
    wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    document.body.appendChild(wrapper);
  });

  afterEach(() => {
    // clean up the portal target after each test
    if (document.body.contains(wrapper)) {
      document.body.removeChild(wrapper);
    }
  });

  it("renders children in a portal", () => {
    // render the component with some child content
    render(
      <ReactPortal wrapperId="wrapper">
        <div>Hello, world!</div>
      </ReactPortal>
    );

    // expect the child content to be rendered in the portal
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("creates a new portal target if one does not exist", () => {
    // remove the portal target so it does not exist
    document.body.removeChild(wrapper);

    // render the component with some child content
    render(
      <ReactPortal wrapperId="wrapper">
        <div>Hello, world!</div>
      </ReactPortal>
    );

    // expect the child content to be rendered in a newly created portal target
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
