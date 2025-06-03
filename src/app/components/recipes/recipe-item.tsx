import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { HeartIcon } from "@heroicons/react/24/outline";

import Rating from "@app/components/recipes/rating";
import { FullRecipe } from "@app/lib/types/api.types";

const RecipeItem = ({ recipe }: { recipe: FullRecipe }) => {
  return (
    <Card
      classNames={{
        base: "p-4 h-full z-10 bg-transparent",
        header: "h-[22px] p-0 justify-end",
        body: "text-secondary-foreground p-0 justify-end mb-4 z-1 gap-2",
        footer: "p-0 z-1 rounded-none justify-between",
      }}
    >
      <CardHeader>
        <HeartIcon className="text-active-foreground/80 h-full stroke-2" />
      </CardHeader>
      <CardBody>
        <h2 className="truncate text-sm/4.5 font-semibold uppercase">
          {recipe.title}
        </h2>
        <p className="line-clamp-2 text-xs/4">{recipe.description}</p>
      </CardBody>
      <CardFooter>
        <Rating rating={recipe.rating} />
        <Button
          color="primary"
          disableRipple
          radius="sm"
          className="h-[31px] w-[89px] text-xs font-medium"
        >
          See recipe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeItem;
