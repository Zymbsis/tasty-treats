"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const handleToggleTheme = (selected: boolean) =>
    setTheme(selected ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={resolvedTheme === "dark"}
      onValueChange={handleToggleTheme}
      classNames={{
        base: "animate-fade-in hidden md:inline-flex",
        wrapper:
          "bg-switch group-data-[selected=true]:bg-accent h-5 w-10 p-0 box-content border border-transparent drop-shadow-lg",
        thumb:
          "bg-secondary-foreground group-data-[pressed=true]:w-5 group-data-[selected]:group-data-[pressed]:ml-5 group-data-[selected=true]:ms-5 shadow-none",
      }}
    />
  );
};

export default ThemeSwitch;
