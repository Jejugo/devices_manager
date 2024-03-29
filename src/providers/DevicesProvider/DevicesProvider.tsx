import React, { useState, useContext, useEffect, createContext } from "react";
import { sendRequest } from "../../service";
import { sortingTypes, devicesTypes } from "./constants";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

export type DropdownItem = {
  id: string;
  name: string;
  value: string;
};

interface IDevicesContext {
  devices: Device[];
  sortingTypes: DropdownItem[];
  devicesTypes: DropdownItem[];
  updateList: () => void;
}

const initialState = {
  devices: [] as Device[],
  devicesTypes: [] as DropdownItem[],
  sortingTypes: [] as DropdownItem[],
  updateList: () => {},
};

const DevicesContext = createContext<IDevicesContext>(initialState);

export function useDevices() {
  return useContext(DevicesContext);
}

export function DevicesProvider({ children }: { children: React.ReactNode }) {
  const [devices, setDevices] = useState<Device[]>([]);
  const { showSnackbar } = useSnackbar();

  const getDevices = async () => {
    try {
      const { data: devices } = await sendRequest({
        url: "devices",
        method: "GET",
      });
  
      setDevices(devices);
    }
    catch(err){
      showSnackbar("Something went wrong.", "ERROR");
    }
  };

  useEffect(() => {
    getDevices().catch((err) => console.error(err));
  }, []);

  const updateList = () => {
    getDevices().catch((err) => console.error(err));
  };

  return (
    <DevicesContext.Provider
      value={{
        devices,
        sortingTypes,
        devicesTypes,
        updateList,
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
}
