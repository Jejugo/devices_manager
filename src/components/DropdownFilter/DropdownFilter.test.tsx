import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropdownFilter from "./DropdownFilter";
import List from "../List/List";

const MOCK_OBJECT = [
  {
    id: "e8okoP2l5",
    system_name: "DESKTOP-SMART",
    type: "WINDOWS",
    hdd_capacity: "10",
  },
  {
    id: "Th3ngERn9",
    system_name: "MAC-LEADER",
    type: "MAC",
    hdd_capacity: "2048",
  },
  {
    id: "Q1JdBnE12",
    system_name: "ARMANDO",
    type: "WINDOWS",
    hdd_capacity: "256",
  },
  {
    id: "e7ocoQ2n3",
    system_name: "MIGUEL-PC",
    type: "WINDOWS",
    hdd_capacity: "500",
  },
  {
    id: "Jj5bn3G2H",
    system_name: "FIRST-MAC",
    type: "MAC",
    hdd_capacity: "180",
  },
  {
    id: "GT556QGnk",
    system_name: "GOOD-MAC",
    type: "MAC",
    hdd_capacity: "500",
  },
  {
    id: "ppRmcE9p8",
    system_name: "JACK-GUEST",
    type: "LINUX",
    hdd_capacity: "302",
  },
  {
    id: "R5LdSnQhY",
    system_name: "HOME-ONE",
    type: "WINDOWS",
    hdd_capacity: "50",
  },
  {
    id: "ab1coL2n9",
    system_name: "GILBERT-COMPUTER",
    type: "WINDOWS",
    hdd_capacity: "750",
  },
  {
    id: "LM5dBnJ2G",
    system_name: "MOON-SMART",
    type: "WINDOWS",
    hdd_capacity: "256",
  },
  {
    id: "Up5bcEQp4",
    system_name: "JULIO-MAC-LOCAL",
    type: "MAC",
    hdd_capacity: "512",
  },
  {
    id: "Up5ncErp8",
    system_name: "RYANN-HOST",
    type: "LINUX",
    hdd_capacity: "220",
  },
];

const DropdownWithList = () => {
  const [dropdownValue, setDropdownValue] = useState<string>("1");
  const items = [
    { id: "1", name: "Item 1", value: "1" },
    { id: "2", name: "Item 2", value: "2" },
    { id: "3", name: "Item 3", value: "3" },
  ];

  return (
    <>
      <DropdownFilter
        items={items}
        value={dropdownValue}
        onChange={(e: any) => setDropdownValue(e.target.value)}
        description="test dropdown"
      />
      <List items={MOCK_OBJECT} />
    </>
  );
};

describe("DropdownFilter", () => {
  const items = [
    { id: "1", name: "Item 1", value: "1" },
    { id: "2", name: "Item 2", value: "2" },
    { id: "3", name: "Item 3", value: "3" },
  ];

  it("renders a dropdown with options and calls onChange when a different value is selected", () => {
    const handleChange = jest.fn();
    render(
      <DropdownFilter
        tabIndex={1}
        description="Test Dropdown"
        items={items}
        value="All"
        onChange={handleChange}
      />
    );

    const dropdown = screen.getByRole("combobox");
    expect(dropdown).toBeInTheDocument();

    const allOption = screen.getByText(/All/i);
    expect(allOption).toBeInTheDocument();

    items.forEach((item) => {
      const option = screen.getByText(`Test Dropdown: ${item.name}`);
      expect(option).toBeInTheDocument();
    });

    userEvent.selectOptions(dropdown, "2");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("blabla", () => {
    render(<DropdownWithList />);
  });
});
