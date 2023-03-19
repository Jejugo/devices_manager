import React, { useState, useEffect, useContext } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

type DeviceContextType = {
  deviceType: DeviceType | null;
};

const DeviceContext = React.createContext<DeviceContextType>({
  deviceType: null,
});

type DeviceProviderProps = {
  children: React.ReactNode;
};

export function useDevice() {
  return useContext(DeviceContext);
}

const DeviceProvider = ({ children }: DeviceProviderProps) => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const setDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    setDevice();
    window.addEventListener("resize", setDevice);
    return () => window.removeEventListener("resize", setDevice);
  }, []);

  return (
    <DeviceContext.Provider value={{ deviceType }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider
