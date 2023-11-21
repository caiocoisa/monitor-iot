"use client";
import { ReactNode, createContext, useState } from "react";
import { NavPages } from "../lib/enums";
  interface ProviderProps {
children: ReactNode
}
export const NavigationContext = createContext({
  page: 0,
  setPage: (value: NavPages) => {}
});
export const NavigationContextProvider = ({children}: ProviderProps) => {
  const [page, setPage] = useState(0);
  return(
  <NavigationContext.Provider value={{page, setPage}}>
    {children}
  </NavigationContext.Provider>
  );
};