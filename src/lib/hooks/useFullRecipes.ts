import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";
import { FullRecipe } from "@/lib/types/api.types";
import { useDisclosure } from "@heroui/react";
import { useInView } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";

export const useFullRecipes = (_id: string) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { favoriteRecipes, isHydrated, toggleToFavorite } = use(
    FavoriteRecipesContext,
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isFavorite = favoriteRecipes.includes(_id);

  const [selectedRecipe, setSelectedRecipe] = useState<FullRecipe>();
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = () => {
    if (!selectedRecipe) setIsLoading(true);
    onOpen();
  };

  const handleToggleToFavorite = () => toggleToFavorite(_id, isFavorite);

  useEffect(() => {
    if (selectedRecipe || !isInView) return;

    (async () => {
      const res = await fetch(`http://localhost:3000/api/recipe/${_id}`);
      const data = (await res.json()) as FullRecipe;
      setSelectedRecipe(data);
      setIsLoading(false);
    })();
  }, [isInView, _id, selectedRecipe]);

  return {
    ref,
    isOpen,
    isFavorite,
    isLoading,
    isHydrated,
    selectedRecipe,
    onOpenChange,
    handleOpenModal,
    handleToggleToFavorite,
  };
};
