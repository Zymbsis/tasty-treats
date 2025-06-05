import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  cn,
  useDisclosure,
} from "@heroui/react";
import { HeartIcon } from "@heroicons/react/24/outline";

import Rating from "@app/components/ui/rating";
import { Button } from "@app/components/ui/button";
import RecipeModalContent from "@app/components/modals/recipe/recipe-modal-content";
import { FullRecipe, Recipe } from "@app/lib/types/api.types";

const RecipeItem = ({
  recipe,
  isFavorite,
  handleToggleToFavorite,
}: {
  recipe: Recipe;
  isFavorite: boolean;
  handleToggleToFavorite: () => void;
}) => {
  const { _id, title, description, rating, preview } = recipe;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState<FullRecipe>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (selectedRecipe || !isInView) return;

    (async () => {
      const res = await fetch(`http://localhost:3000/api/recipe/${_id}`);
      const data = (await res.json()) as FullRecipe;
      setSelectedRecipe(data);
    })();
  }, [isInView, _id, isFavorite, selectedRecipe]);

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
          <HeartIcon
            className={cn(
              "h-full transition-colors",
              isFavorite && "fill-active-foreground/80 text-transparent",
            )}
          />
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
          onPress={onOpen}
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
