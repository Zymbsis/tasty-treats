"use client";

import { Button } from "@/components/ui/button";
import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";
import { HeartIcon } from "@heroicons/react/24/outline";
import { cn } from "@heroui/react";
import { use } from "react";

const ToggleFavoriteButton = ({
  _id,
  isIconOnly = true,
}: {
  _id: string;
  isIconOnly?: boolean;
}) => {
  const { favoriteRecipes, toggleToFavorite, isHydrated } = use(
    FavoriteRecipesContext,
  );
  const isFavorite = favoriteRecipes.includes(_id);
  const handleToggleToFavorite = () => toggleToFavorite(_id, isFavorite);

  if (!isHydrated) return null;

  return (
    <Button
      color={isIconOnly ? "default" : "primary"}
      variant={isIconOnly ? "light" : "solid"}
      isIconOnly={isIconOnly}
      disableRipple
      onPress={handleToggleToFavorite}
      className={cn(
        isIconOnly && "min-w-none text-active-foreground/80 size-[22px]",
        !isIconOnly && "h-full w-[200px] px-6 font-medium md:px-7",
      )}
    >
      {isIconOnly && (
        <HeartIcon
          className={cn(
            "animate-fade-in h-full transition-colors",
            isFavorite && "fill-active-foreground/80 text-transparent",
          )}
        />
      )}
      {!isIconOnly && (isFavorite ? "Remove from favorite" : "Add to favorite")}
    </Button>
  );
};

export default ToggleFavoriteButton;
