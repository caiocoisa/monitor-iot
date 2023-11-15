import React, { ReactNode, createContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
  theme: "light",
  setTheme: (value: string) => {},
});

export const ThemeContextProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};
