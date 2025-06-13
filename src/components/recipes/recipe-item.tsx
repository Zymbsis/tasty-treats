import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Recipe } from "@/lib/types/api.types";
import Rating from "@/components/ui/rating";
import ToggleFavoriteButton from "@/components/recipes/toggle-favorite-button";
import SeeRecipeButton from "@/components/recipes/see-recipe-button";

const RecipeItem = ({ ...recipe }: Recipe) => {
  const { _id, title, description, rating, preview } = recipe;

  return (
    <Card
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
        <ToggleFavoriteButton _id={_id} />
      </CardHeader>
      <CardBody>
        <h2 className="truncate text-sm/4.5 font-semibold uppercase">
          {title}
        </h2>
        <p className="line-clamp-2 text-xs/4">{description}</p>
      </CardBody>
      <CardFooter>
        <Rating rating={rating} />
        <SeeRecipeButton _id={_id} />
      </CardFooter>
    </Card>
  );
};

export default RecipeItem;
