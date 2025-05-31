"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Provider;
