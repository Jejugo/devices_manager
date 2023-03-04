import React, { useState, useContext, useEffect, createContext } from "react";
import { sendRequest } from "../services";

type DeviceType = {
  id: string;
  name: "WINDOWS" | "Mac" | "Linux";
};

interface IDevicesContext {
  devices: Device[];
  devicesTypes: DeviceType[];
  updateList: () => void;
}

const initialState = {
  devices: [] as Device[],
  devicesTypes: [] as DeviceType[],
  updateList: () => {},
};

const DevicesContext = createContext<IDevicesContext>(initialState);

export function useDevices() {
  return useContext(DevicesContext);
}

export function DevicesProvider({ children }: { children: React.ReactNode }) {
  const [devices, setDevices] = useState<Device[]>([]);

  // since these items are derived from the state it doesn't need to be a state object
  const devicesTypes = devices
    .reduce((acc: any, obj) => {
      if (!acc.find((item: Device) => item.type === obj.type)) {
        acc.push(obj);
      }
      return acc;
    }, [])
    .map((item: Device) => ({
      id: item.id,
      name: item.type,
    }));

  const getDevices = async () => {
    const { data: devices } = await sendRequest({
      url: "devices",
      method: "GET",
    });
    setDevices(devices);
  };

  useEffect(() => {
    getDevices().catch((err) => console.error(err));
  }, []);

  const updateList = () => {
    getDevices().catch((err) => console.error(err));
  };

  return (
    <DevicesContext.Provider value={{ devices, devicesTypes, updateList }}>
      {children}
    </DevicesContext.Provider>
  );
}
