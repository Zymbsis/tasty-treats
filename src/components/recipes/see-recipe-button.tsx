"use client";

import RecipeModalContent from "@/components/modals/recipe/recipe-modal-content";
import { Button } from "@/components/ui/button";
import { ModalContext } from "@/components/ui/modal-provider";
import { getRecipeById } from "@/lib/services/api";
import { FullRecipe } from "@/lib/types/api.types";
import { useInView } from "framer-motion";
import { use, useEffect, useRef, useState } from "react";

const SeeRecipeButton = ({ _id }: { _id: string }) => {
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
    <Button
      ref={ref}
      color="primary"
      radius="sm"
      disableRipple
      isLoading={isLoading}
      isIconOnly={isLoading}
      isDisabled={isLoading}
      onPress={handleOpenModal}
      className="h-[31px] w-[89px] text-xs font-medium"
    >
      See recipe
    </Button>
  );
};

export default SeeRecipeButton;
