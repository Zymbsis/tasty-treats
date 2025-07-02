"use client";

import { ThemeProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import { ReactNode } from "react";
import FavoriteRecipesProvider from "@/components/ui/favorite-recipes-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute="class" enableSystem>
        <QueryClientProvider client={queryClient}>
          <FavoriteRecipesProvider>{children}</FavoriteRecipesProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default Providers;
