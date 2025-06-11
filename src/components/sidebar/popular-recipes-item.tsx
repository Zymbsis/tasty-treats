"use client";

import Image from "next/image";
import { PopularRecipe } from "@/lib/types/api.types";
import { useFullRecipes } from "@/lib/hooks/useFullRecipes";
import RecipeModalContent from "@/components/modals/recipe/recipe-modal-content";
import { cn, Spinner } from "@heroui/react";

const PopularRecipesItem = ({ ...recipe }: PopularRecipe) => {
  const { _id, title, preview, description } = recipe;
  const {
    ref,
    isOpen,
    isFavorite,
    isLoading,
    selectedRecipe,
    onOpenChange,
    handleOpenModal,
    handleToggleToFavorite,
  } = useFullRecipes(_id);

  return (
    <>
      <div
        className="flex cursor-pointer gap-4 md:gap-2 xl:gap-4"
        ref={ref}
        onClick={handleOpenModal}
      >
        <div
          className={cn(
            "rounded-hero-lg relative size-16 shrink-0 md:size-12 xl:size-16",
            isLoading && "bg-foreground/10 flex items-center justify-center",
          )}
        >
          {isLoading && <Spinner variant="gradient" />}
          {!isLoading && (
            <Image
              src={preview}
              alt={title}
              fill
              className="rounded-hero-lg object-contain"
              sizes="350px"
              placeholder="blur"
              blurDataURL="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WA8AAkcBYnr93DQAAAAASUVORK5CYII="
            />
          )}
        </div>

        <div className="w-full overflow-hidden">
          <h3 className="mb-2 truncate text-sm/4.5 font-semibold uppercase">
            {title}
          </h3>
          <p className="text-foreground/80 md:text-10/3.5 line-clamp-2 text-xs/3 md:line-clamp-3">
            {description}
          </p>
        </div>
      </div>
      {selectedRecipe && (
        <RecipeModalContent
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          selectedRecipe={selectedRecipe}
          isFavorite={isFavorite}
          handleToggleToFavorite={handleToggleToFavorite}
        />
      )}
    </>
  );
};

export default PopularRecipesItem;
