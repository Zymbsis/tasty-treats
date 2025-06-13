"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import FavoriteRecipesProvider from "@/components/ui/favorite-recipes-provider";
import ModalProvider from "@/components/ui/modal-provider";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" enableSystem>
        <FavoriteRecipesProvider>
          <ModalProvider>{children}</ModalProvider>
        </FavoriteRecipesProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Provider;
