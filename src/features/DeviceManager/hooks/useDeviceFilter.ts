import { useEffect, useState } from "react";
import {
  useDevices,
  DropdownItem,
} from "../../../providers/DevicesProvider/DevicesProvider";

type DeviceType = "Windows" | "Mac" | "Linux" | "All";

const NAME_ASCENDING = "name (ascending)";
const NAME_DESCENDING = "name (descending)";
const HDD_CAPACITY_ASCENDING = "hdd_capacity (ascending)";
const HDD_CAPACITY_DESCENDING = "hdd_capacity (descending)";

export type DeviceFilter = {
  filteredDevices: Device[];
  devicesTypes: DropdownItem[];
  deviceType: DeviceType;
  sortingTypes: DropdownItem[];
  sortingType: string;
  setSortingType: (value: string) => void;
  setSearch: (value: string) => void;
  setDeviceType: (value: DeviceType) => void;
};

export default function useDeviceFilter(): DeviceFilter {
  const { devices, devicesTypes, sortingTypes } = useDevices();
  const [filtered, setFiltered] = useState<Device[]>([]);
  const [sortingType, setSortingType] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [deviceType, setDeviceType] = useState<DeviceType>("All");

  useEffect(() => {
    const filteredDevices = devices
      .filter((device) =>
        device.system_name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((device) => {
        if (deviceType === "All") {
          return true;
        } else {
          return device.type.toLowerCase() === deviceType.toLowerCase();
        }
      });

    switch (sortingType) {
      case NAME_ASCENDING:
        filteredDevices.sort((a, b) =>
          a.system_name.localeCompare(b.system_name)
        );
        break;
      case NAME_DESCENDING:
        filteredDevices.sort((a, b) =>
          b.system_name.localeCompare(a.system_name)
        );
        break;
      case HDD_CAPACITY_ASCENDING:
        filteredDevices.sort(
          (a, b) => parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity)
        );
        break;
      case HDD_CAPACITY_DESCENDING:
        filteredDevices.sort(
          (a, b) => parseInt(b.hdd_capacity) - parseInt(a.hdd_capacity)
        );
        break;        
    }

    setFiltered(filteredDevices);
  }, [devices, search, deviceType, sortingType]);

  return {
    filteredDevices: filtered,
    devicesTypes,
    deviceType,
    sortingTypes,
    sortingType,
    setSortingType,
    setSearch,
    setDeviceType,
  };
}
