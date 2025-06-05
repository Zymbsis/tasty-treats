import { createContext, ReactNode, useEffect, useState } from "react";

export const FavoriteRecipesContext = createContext<{
  favoriteRecipes: string[];
  toggleToFavorite: (id: string, isFavorite: boolean) => void;
}>({
  favoriteRecipes: [],
  toggleToFavorite: () => {},
});

const FavoriteRecipesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>([]);

  const toggleToFavorite = (id: string, isFavorite: boolean) => {
    let updated = [];

    if (isFavorite) updated = favoriteRecipes.filter(item => item !== id);
    else updated = [...favoriteRecipes, id];

    localStorage.setItem("favorite-recipes", JSON.stringify(updated));
    setFavoriteRecipes(updated);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorite-recipes") ?? "[]");
    setFavoriteRecipes(stored);
  }, []);

  return (
    <FavoriteRecipesContext value={{ favoriteRecipes, toggleToFavorite }}>
      {children}
    </FavoriteRecipesContext>
  );
};

export default FavoriteRecipesProvider;
