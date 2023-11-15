"use client";
import React, { useState } from "react";
import { Switch } from "@nextui-org/switch";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { LoginFields } from "./lib/enums";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  MoonIcon,
  SunIcon
  } from "@/app/public/Icons";

export default function Home() {
  const [theme, setTheme] = React.useState("dark");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: number
  ) => {
    if (field === LoginFields.User) {
      setUser(e.target.value);
      return;
    }
    setPassword(e.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const onSubmit = () => {
    console.log(`Submit ${user} & ${password}`);
  };
  return (
    <main className={`${theme} text-foreground bg-background`}>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="w-full m-12 flex flex-row align-middle justify-between max-w-3xl">
          <h1>Access your account</h1>
          <Switch
            defaultSelected
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            size="lg"
            color="default"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            /* thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            } */
          >
            {theme} mode
          </Switch>
        </div>
        <div className="w-11/12 max-w-3xl flex flex-col gap-4 m-4">
          <Input
            type="text"
            variant="faded"
            label="User"
            labelPlacement="inside"
            value={user}
            onChange={(e) => handleOnChange(e, LoginFields.User)}
          />
          <Input
            type={isVisible ? "text" : "password"}
            variant="faded"
            label="Password"
            labelPlacement="inside"
            value={password}
            onChange={(e) => handleOnChange(e, LoginFields.Password)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
          <Button>Log In</Button>
        </div>
      </div>
    </main>
  );
}
