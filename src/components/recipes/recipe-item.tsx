"use client";

import { Card, CardBody, CardFooter, CardHeader, cn } from "@heroui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Recipe } from "@/lib/types/api.types";
import { useFullRecipes } from "@/lib/hooks/useFullRecipes";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import RecipeModalContent from "@/components/modals/recipe/recipe-modal-content";

const RecipeItem = ({ ...recipe }: Recipe) => {
  const { _id, title, description, rating, preview } = recipe;
  const {
    ref,
    isOpen,
    isFavorite,
    isLoading,
    isHydrated,
    selectedRecipe,
    onOpenChange,
    handleOpenModal,
    handleToggleToFavorite,
  } = useFullRecipes(_id);

  return (
    <Card
      ref={ref}
      classNames={{
        base: "p-4 h-full z-10 bg-transparent",
        header: "h-[22px] p-0 justify-end rounded-none",
        body: "text-secondary-foreground p-0 justify-end mb-4 z-1 gap-2",
        footer: "p-0 z-1 rounded-none justify-between",
      }}
      style={{
        backgroundImage: `var(--recipe-gradient), url(${preview})`,
      }}
    >
      <CardHeader>
        <Button
          variant="light"
          isIconOnly
          disableRipple
          onPress={handleToggleToFavorite}
          className="min-w-none text-active-foreground/80 size-[22px]"
        >
          {isHydrated && (
            <HeartIcon
              className={cn(
                "animate-fade-in h-full transition-colors",
                isFavorite && "fill-active-foreground/80 text-transparent",
              )}
            />
          )}
        </Button>
      </CardHeader>
      <CardBody>
        <h2 className="truncate text-sm/4.5 font-semibold uppercase">
          {title}
        </h2>
        <p className="line-clamp-2 text-xs/4">{description}</p>
      </CardBody>
      <CardFooter>
        <Rating rating={rating} />
        <Button
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
      </CardFooter>
      {selectedRecipe && (
        <RecipeModalContent
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          selectedRecipe={selectedRecipe}
          isFavorite={isFavorite}
          handleToggleToFavorite={handleToggleToFavorite}
        />
      )}
    </Card>
  );
};

export default RecipeItem;
