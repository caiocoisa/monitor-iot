"use client";
import React from "react";
import NavBar from "../ui/dashboard/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState("light");
  return (
    <div className={`${theme} text-foreground bg-background`}>
      <NavBar />
      {children}
    </div>
  );
}
