import React, { useState, useEffect, useContext } from "react";

type ThemeType = "light" | "dark";

type DarkModeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const DarkModeContext = React.createContext<DarkModeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export function useDarkMode() {
  return useContext(DarkModeContext);
}

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme as ThemeType);
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
