"use client";

import RecipeModalContent from "@/components/modals/recipe/recipe-modal-content";
import { ModalContext } from "@/components/ui/modal-provider";
import { getRecipeById } from "@/lib/services/api";
import { FullRecipe } from "@/lib/types/api.types";
import { cn, Spinner } from "@heroui/react";
import { useInView } from "framer-motion";
import { ReactNode, use, useEffect, useRef, useState } from "react";

const PopularRecipesItemWrapper = ({
  children,
  _id,
}: {
  children: ReactNode;
  _id: string;
}) => {
  const ref = useRef(null);
  const { onModalOpen } = use(ModalContext);
  const isInView = useInView(ref, { once: true });
  const [selectedRecipe, setSelectedRecipe] = useState<FullRecipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = async () => {
    if (selectedRecipe)
      onModalOpen(<RecipeModalContent selectedRecipe={selectedRecipe} />);
    else {
      setIsLoading(true);
      const data = await getRecipeById(_id);
      if (data) {
        setSelectedRecipe(data);
        onModalOpen(<RecipeModalContent selectedRecipe={data} />);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isInView || selectedRecipe) return;

    (async () => {
      const data = await getRecipeById(_id);
      if (data) setSelectedRecipe(data);
    })();
  }, [isInView, selectedRecipe, _id]);

  return (
    <li
      className={cn(
        "relative flex cursor-pointer gap-4 md:gap-2 xl:gap-4",
        isLoading && "[&_img]:hidden",
      )}
      ref={ref}
      onClick={handleOpenModal}
    >
      {isLoading && (
        <Spinner
          variant="gradient"
          className="bg-background absolute z-40 size-16 md:size-12 xl:size-16"
        />
      )}
      {children}
    </li>
  );
};

export default PopularRecipesItemWrapper;
