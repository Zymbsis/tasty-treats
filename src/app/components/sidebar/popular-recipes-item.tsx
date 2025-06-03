import Image from "next/image";
import { PopularRecipe } from "@app/lib/types/api.types";

const PopularRecipesItem = ({ title, description, preview }: PopularRecipe) => {
  return (
    <>
      <div className="relative size-16 shrink-0 md:size-12 xl:size-16">
        <Image
          src={preview}
          alt={title}
          fill
          className="rounded-hero-lg object-contain"
          sizes="350px"
        />
      </div>

      <div className="w-full overflow-hidden">
        <h3 className="mb-2 truncate text-sm/4.5 font-semibold uppercase md:mb-1">
          {title}
        </h3>
        <p className="text-foreground/80 md:text-10/3.5 line-clamp-2 text-xs/3 md:line-clamp-3">
          {description}
        </p>
      </div>
    </>
  );
};

export default PopularRecipesItem;
