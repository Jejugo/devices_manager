/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { DevicesProvider, useDevices } from "./DevicesProvider";
import { sendRequest } from "../../service";

jest.mock("../../service");

const sendRequestMock = sendRequest as jest.Mocked<any>;

describe("DevicesProvider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetches devices on mount and provides context with correct values", async () => {
    const devices = [
      { id: "1", system_name: "Device 1", type: "laptop" },
      { id: "2", system_name: "Device 2", type: "phone" },
      { id: "3", system_name: "Device 3", type: "tablet" },
    ] as Device[];

    // Mock API response
    sendRequestMock.mockResolvedValueOnce({ data: devices });

    render(
      <DevicesProvider>
        <TestComponent />
      </DevicesProvider>
    );

    // Wait for devices to be fetched and context to be updated
    await waitFor(() => {
      expect(sendRequestMock).toHaveBeenCalledTimes(1);
      expect(sendRequestMock).toHaveBeenCalledWith({
        url: "devices",
        method: "GET",
      });
      expect(screen.getByText(devices[0].system_name)).toBeInTheDocument();
      expect(screen.getByText(devices[1].system_name)).toBeInTheDocument();
      expect(screen.getByText(devices[2].system_name)).toBeInTheDocument();
    });
  });
});

function TestComponent() {
  const { devices } = useDevices();

  return (
    <div>
      {devices.map((device) => (
        <div key={device.id}>{device.system_name}</div>
      ))}
    </div>
  );
}
