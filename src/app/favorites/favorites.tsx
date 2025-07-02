"use client";

import RecipesList from "@/components/recipes/recipes-list";
import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";
import { SEARCH_PARAMS } from "@/lib/constants/search-params";
import { getRecipeById } from "@/lib/services/api";
import { FullRecipe } from "@/lib/types/api.types";
import { useQueries } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { use } from "react";

const Favorites = () => {
  const { favoriteRecipes } = use(FavoriteRecipesContext);
  const searchParams = useSearchParams();
  const category = new URLSearchParams(searchParams).get(
    SEARCH_PARAMS.CATEGORY,
  );

  const results = useQueries({
    queries: favoriteRecipes.map(recipe => ({
      queryKey: ["recipe", recipe],
      queryFn: () => getRecipeById(recipe),
      enabled: !!favoriteRecipes.length,
      staleTime: Infinity,
      select: (data: FullRecipe | null) => {
        if (!category) return data;
        return data?.category === category ? data : null;
      },
    })),
  });

  const isLoading = results.some(result => result.isLoading);
  const hasErrors = results.some(result => result.error);
  const recipes = results
    .map(item => item.data)
    .filter((recipe): recipe is NonNullable<typeof recipe> => recipe != null);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {hasErrors && (
        <div className="mb-4 rounded border border-red-200 bg-red-50 p-3 text-red-700">
          Some recipes failed to load
        </div>
      )}
      {recipes.length ? <RecipesList recipes={recipes} /> : null}
    </>
  );
};
export default Favorites;
