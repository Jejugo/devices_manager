import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import List from "../../components/List/List";
import * as S from "./DeviceManager.styles";
import { useDevices } from "../../providers/DevicesProvider";

type DeviceType = "Windows" | "Mac" | "Linux" | "All";

export default function DeviceManager() {
  const { devices, devicesTypes } = useDevices();
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [sortingFilter, setSortingFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [deviceType, setDeviceType] = useState<DeviceType>("All");

  const sortingDevices = [
    { id: "1", name: "name (ascending)" },
    { id: "2", name: "name (descending)" },
    { id: "3", name: "hdd_capacity (ascending)" },
    { id: "4", name: "hdd_capacity (descending)" },
  ];

  const handleSearchbar = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let filteredDevices = devices
      .filter((device) => device.system_name.toLowerCase().includes(search))
      .filter((device) =>
        deviceType !== "All"
          ? device.type.toLowerCase() === deviceType.toLowerCase()
          : device
      );
    if (sortingFilter) {
      switch (sortingFilter) {
        case "name (ascending)":
          filteredDevices.sort((a: Device, b: Device) =>
            a.system_name > b.system_name ? 1 : -1
          );
          break;
        case "name (descending)":
          filteredDevices.sort((a: Device, b: Device) =>
            a.system_name > b.system_name ? -1 : 1
          );
          break;
        case "hdd_capacity (ascending)":
          filteredDevices.sort(
            (a: Device, b: Device) =>
              parseInt(a.hdd_capacity) - parseInt(b.hdd_capacity)
          );
          break;
        case "hdd_capacity (descending)":
          filteredDevices.sort(
            (a: Device, b: Device) =>
              parseInt(b.hdd_capacity) - parseInt(a.hdd_capacity)
          );
          break;
      }
    }

    setFilteredDevices(filteredDevices);
  }, [deviceType, devices, search, sortingFilter]);

  return (
    <div>
      <S.Filters>
        <SearchBar onChange={handleSearchbar} />
        <DropdownFilter
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDeviceType(e.target.value as any)
          }
          value={deviceType}
          items={devicesTypes}
          title="Device Type"
        />
        <DropdownFilter
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortingFilter(e.target.value as any)
          }
          value={sortingFilter}
          items={sortingDevices}
          title="Sort By"
        />
      </S.Filters>
      <List items={filteredDevices} />
    </div>
  );
}
