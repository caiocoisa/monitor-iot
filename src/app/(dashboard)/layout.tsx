import React from "react";
import NavBar from "../ui/dashboard/navbar";
import { NavigationContextProvider } from "../contexts/navigation-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NavigationContextProvider>
      <div>
        <NavBar />
        {children}
      </div>
    </NavigationContextProvider>
  );
}
