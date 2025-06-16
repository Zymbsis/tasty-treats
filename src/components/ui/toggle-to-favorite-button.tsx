"use client";

import { use } from "react";
import { Button, ButtonProps, cn } from "@heroui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";

const ToggleToFavoriteButton = ({
  id,
  ...props
}: {
  id: string;
} & ButtonProps) => {
  const { favoriteRecipes, toggleToFavorite, isHydrated } = use(
    FavoriteRecipesContext,
  );
  const isFavorite = favoriteRecipes.includes(id);
  const handleToggleToFavorite = () => toggleToFavorite(id, isFavorite);

  if (!isHydrated) return null;

  return (
    <Button
      disableRipple
      onPress={handleToggleToFavorite}
      startContent={
        <HeartIcon
          className={cn(
            "animate-fade-in transition-transform-colors-opacity h-full hover:scale-[1.05]",
            isFavorite && "fill-active-foreground/80 text-transparent",
          )}
        />
      }
      {...props}
    >
      {props.children ??
        (isFavorite ? "Remove from favorite" : "Add to favorite")}
    </Button>
  );
};

export default ToggleToFavoriteButton;
