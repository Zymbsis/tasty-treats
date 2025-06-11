"use client";

import RecipeItem from "@/components/recipes/recipe-item";
import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";
import { Recipe } from "@/lib/types/api.types";
import { use } from "react";

const RecipesList = ({ recipes }: { recipes: Recipe[] }) => {
  const { favoriteRecipes, isHydrated, toggleToFavorite } = use(
    FavoriteRecipesContext,
  );

  return (
    <ul className="flex grow flex-col gap-6 pb-10 md:flex-row md:flex-wrap md:gap-4 md:pb-16 xl:gap-y-8">
      {recipes.map(recipe => {
        const isFavorite = favoriteRecipes.includes(recipe._id);

        return (
          <li
            key={recipe._id}
            className="relative aspect-square w-full rounded-lg md:h-[264px] md:w-[calc((100%-16px)/2)] xl:h-[287px] xl:w-[calc((100%-32px)/3)]"
          >
            <RecipeItem
              recipe={recipe}
              isFavorite={isFavorite}
              isHydrated={isHydrated}
              handleToggleToFavorite={() =>
                toggleToFavorite(recipe._id, isFavorite)
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RecipesList;
