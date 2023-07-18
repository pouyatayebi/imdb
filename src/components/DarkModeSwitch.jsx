"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className={"cursor-pointer text-xl hover:text-amber-500"}
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className={"cursor-pointer text-xl hover:text-amber-500"}
          />
        ))}
    </div>
  );
}
