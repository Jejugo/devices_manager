import { renderHook, act } from "@testing-library/react";
import useDeviceFilter from "./useDeviceFilter";
import { useDevices } from "../../../providers/DevicesProvider/DevicesProvider";

jest.mock("../../../providers/DevicesProvider/DevicesProvider");

const mockUseDevices = useDevices as jest.MockedFunction<typeof useDevices>;

const devicesTypes = [
  { id: "1", name: "Windows", value: "Windows" },
  { id: "2", name: "Mac", value: "Mac" },
  { id: "3", name: "Linux", value: "Linux" },
  { id: "4", name: "All", value: "All" },
];
const sortingTypes = [
  { id: "1", name: "name (ascending)", value: "name (ascending)" },
  { id: "2", name: "name (descending)", value: "name (descending)" },
  {
    id: "3",
    name: "hdd_capacity (ascending)",
    value: "hdd_capacity (ascending)",
  },
  {
    id: "4",
    name: "hdd_capacity (descending)",
    value: "hdd_capacity (descending)",
  },
  { id: "5", name: "All", value: "All" },
];

describe("useDeviceFilter", () => {
  const devices = [
    {
      id: "1",
      system_name: "Device A",
      type: "Windows",
      hdd_capacity: "256",
    },
    {
      id: "2",
      system_name: "Device B",
      type: "Mac",
      hdd_capacity: "512",
    },
    {
      id: "3",
      system_name: "Device C",
      type: "Linux",
      hdd_capacity: "1024",
    },
    {
      id: "4",
      system_name: "Device C",
      type: "Windows",
      hdd_capacity: "111",
    },
  ];

  beforeEach(() => {
    mockUseDevices.mockReturnValue({
      devices,
      devicesTypes,
      sortingTypes,
      updateList: jest.fn(),
    });
  });

  afterEach(() => {
    mockUseDevices.mockReset();
  });

  it("should filter devices by name and type and sort by name in ascending order", () => {
    const { result } = renderHook(() => useDeviceFilter());

    act(() => {
      result.current.setDeviceType("Windows");
      result.current.setSortingType("name (ascending)");
    });

    expect(result.current.filteredDevices).toEqual([devices[0], devices[3]]);
  });

  it("should filter devices by name and type and sort by name in descending order", () => {
    const { result } = renderHook(() => useDeviceFilter());

    act(() => {
      result.current.setDeviceType("Windows");
      result.current.setSortingType("name (descending)");
    });

    expect(result.current.filteredDevices).toEqual([devices[3], devices[0]]);
  });

  it("should filter devices by name and type and sort by hdd_capacity in ascending order", () => {
    const { result } = renderHook(() => useDeviceFilter());

    act(() => {
      result.current.setDeviceType("Windows");
      result.current.setSortingType("hdd_capacity (ascending)");
    });

    expect(result.current.filteredDevices).toEqual([devices[3], devices[0]]);
  });

  it("should filter devices by name and type and sort by hdd_capacity in descending order", () => {
    const { result } = renderHook(() => useDeviceFilter());

    act(() => {
      result.current.setDeviceType("Windows");
      result.current.setSortingType("hdd_capacity (descending)");
    });

    expect(result.current.filteredDevices).toEqual([devices[0], devices[3]]);
  });

  it("should filter devices by search", () => {
    const { result } = renderHook(() => useDeviceFilter());

    act(() => {
      result.current.setSearch("Device");
    });

    expect(result.current.filteredDevices).toEqual([...devices]);
  });
});
