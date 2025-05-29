"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const Switch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const handleToggleTheme = (checked: boolean) =>
    setTheme(checked ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SwitchPrimitives.Root
      className={
        "peer data-[state=unchecked]:bg-switch data-[state=checked]:bg-accent animate-fade-in box-content hidden h-5 w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent drop-shadow-lg transition-colors md:inline-flex"
      }
      checked={resolvedTheme === "dark"}
      onCheckedChange={handleToggleTheme}
    >
      <SwitchPrimitives.Thumb
        className={
          "bg-secondary-foreground pointer-events-none block size-5 rounded-full transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0"
        }
      />
    </SwitchPrimitives.Root>
  );
};

export default Switch;
