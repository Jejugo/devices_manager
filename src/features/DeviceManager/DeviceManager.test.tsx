import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DeviceManager from "./DeviceManager";

describe("DeviceManager", () => {
  it("renders without crashing", () => {
    render(<DeviceManager />);
    expect(screen.getByTestId("device-manager")).toBeInTheDocument();
  });

  it("renders all child components", () => {
    render(<DeviceManager />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    const deviceTypeDropdown = screen.getAllByRole("combobox")[0];
    expect(deviceTypeDropdown).toBeInTheDocument();

    const sortingDropdown = screen.getAllByRole("combobox")[0];
    expect(sortingDropdown).toBeInTheDocument();

    expect(screen.getByText("Device")).toBeInTheDocument();
  });

  it("updates state correctly", () => {
    render(<DeviceManager />);
    const searchbar = screen.getByRole("textbox");
    const deviceTypeDropdown = screen.getAllByRole("combobox")[0];
    const sortByDropdown = screen.getAllByRole("combobox")[1];

    // update searchbar value
    userEvent.type(searchbar, "Iphone");
    expect(searchbar).toHaveValue("Iphone");

    // update device type dropdown value
    userEvent.selectOptions(deviceTypeDropdown, "All");
    expect(deviceTypeDropdown).toHaveValue("All");

    // update sort by dropdown value
    userEvent.type(sortByDropdown, "All");
    expect(sortByDropdown).toHaveValue("All");
  });
});
