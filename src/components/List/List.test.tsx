import { render, screen } from "@testing-library/react";
import List from "./List";
import { lightTheme } from "../../styles/themes";
import { ThemeProvider } from 'styled-components'

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

describe("List component", () => {
  const items = MOCK_OBJECT;
  it("renders the list of devices", () => {
    render(<ThemeProvider theme={lightTheme}><List items={items} /></ThemeProvider>);
    // Check if the title is rendered
    expect(screen.getByText("Device")).toBeInTheDocument();
    // Check if the separation line is rendered
    expect(screen.getByRole("separator")).toBeInTheDocument();
    // Check if each list item is rendered
    items.forEach((item) => {
      expect(screen.getByText(item.system_name)).toBeInTheDocument();
    });
  });
});
