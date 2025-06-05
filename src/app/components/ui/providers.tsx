"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import FavoriteRecipesProvider from "@app/components/ui/favorite-recipes-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" enableSystem>
        <FavoriteRecipesProvider>{children}</FavoriteRecipesProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Provider;
