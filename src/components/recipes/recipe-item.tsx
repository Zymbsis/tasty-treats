import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Recipe } from "@/lib/types/api.types";
import Rating from "@/components/ui/rating";
import ToggleToFavoriteButton from "@/components/ui/toggle-to-favorite-button";
import Link from "next/link";

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
        <ToggleToFavoriteButton
          id={_id}
          color="default"
          variant="light"
          isIconOnly
          className="min-w-none text-active-foreground/80 size-[22px] data-[hover=true]:bg-transparent"
        >
          {""}
        </ToggleToFavoriteButton>
      </CardHeader>
      <CardBody>
        <h2 className="truncate text-sm/4.5 font-semibold uppercase">
          {title}
        </h2>
        <p className="line-clamp-2 text-xs/4">{description}</p>
      </CardBody>
      <CardFooter>
        <Rating rating={rating} />
        <Link
          scroll={false}
          href={`/recipe/${_id}`}
          className="bg-accent text-secondary-foreground hover:opacity-hover transition-transform-colors-opacity rounded-sm px-2.5 py-2 text-sm font-medium will-change-auto active:scale-[0.97] xl:px-3.5"
        >
          See recipe
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeItem;
