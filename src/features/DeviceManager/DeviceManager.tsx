import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import DropdownFilter from "../../components/DropdownFilter/DropdownFilter";
import List from "../../components/List/List";
import * as S from "./DeviceManager.styles";
import useDeviceFilter from "./hooks/useDeviceFilter";

export default function DeviceManager() {
  const {
    filteredDevices,
    devicesTypes,
    deviceType,
    sortingTypes,
    sortingType,
    setSortingType,
    setSearch,
    setDeviceType,
  } = useDeviceFilter();

  const handleSearchbar = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div data-testid="device-manager">
      <S.Filters>
        <SearchBar onChange={handleSearchbar} />
        <DropdownFilter
          width={200}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setDeviceType(e.target.value as any)
          }
          value={deviceType}
          items={devicesTypes}
          description="Device Type"
        />
        <DropdownFilter
          width={291}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSortingType(e.target.value as any)
          }
          value={sortingType}
          items={sortingTypes}
          description="Sort By"
        />
      </S.Filters>
      <List items={filteredDevices} />
    </div>
  );
}
