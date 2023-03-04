import { DropdownItem } from "./DevicesProvider";

export const sortingTypes: DropdownItem[] = [
  { id: "1", value: "name (ascending)", name: "Name (Ascending)" },
  { id: "2", value: "name (descending)", name: "Name (Descending)" },
  {
    id: "3",
    value: "hdd_capacity (ascending)",
    name: "HDD Capacity (Ascending)",
  },
  {
    id: "4",
    value: "hdd_capacity (descending)",
    name: "HDD Capacity (Descending)",
  },
];

export const devicesTypes: DropdownItem[] = [
  {
    id: "1",
    value: "windows",
    name: "Windows",
  },
  {
    id: "2",
    value: "mac",
    name: "Mac",
  },
  {
    id: "3",
    value: "linux",
    name: "Linux",
  },
];
