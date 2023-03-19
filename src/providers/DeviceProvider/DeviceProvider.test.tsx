import React from "react";
import { render, screen } from "@testing-library/react";
import DeviceProvider, { useDevice } from "./DeviceProvider";

describe("useDevice", () => {
  beforeAll(() => {
    // Mock the window.innerWidth property to simulate different viewport widths
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 800,
    });
  });

  afterAll(() => {
    // Reset the window.innerWidth property after the tests
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: global.innerWidth,
    });
  });

  it("should set the device type to mobile for viewport widths below 768px", () => {
    // Simulate a viewport width of 500px
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 500,
    });

    const TestComponent = () => {
      const { deviceType } = useDevice();
      return <div>{deviceType}</div>;
    };

    render(
      <DeviceProvider>
        <TestComponent />
      </DeviceProvider>
    );

    expect(screen.getByText(/mobile/i)).toBeInTheDocument();
  });

  it("should set the device type to tablet for viewport widths between 768px and 1023px", () => {
    // Simulate a viewport width of 800px
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 800,
    });

    const TestComponent = () => {
      const { deviceType } = useDevice();
      return <div>{deviceType}</div>;
    };

    render(
      <DeviceProvider>
        <TestComponent />
      </DeviceProvider>
    );

    expect(screen.getByText(/tablet/i)).toBeInTheDocument();
  });

  it("should set the device type to desktop for viewport widths above 1023px", () => {
    // Simulate a viewport width of 1200px
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1200,
    });

    const TestComponent = () => {
      const { deviceType } = useDevice();
      return <div>{deviceType}</div>;
    };

    render(
      <DeviceProvider>
        <TestComponent />
      </DeviceProvider>
    );

    expect(screen.getByText(/desktop/i)).toBeInTheDocument();
  });
});
