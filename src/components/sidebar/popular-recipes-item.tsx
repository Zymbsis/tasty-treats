import Image from "next/image";
import { PopularRecipe } from "@/lib/types/api.types";
import Link from "next/link";

const PopularRecipesItem = ({ ...recipe }: PopularRecipe) => {
  const { title, preview, description, _id } = recipe;

  return (
    <Link
      href={`/recipe/${_id}`}
      scroll={false}
      className="flex cursor-pointer gap-4 md:gap-2 xl:gap-4"
    >
      <div className="rounded-hero-lg relative size-16 shrink-0 md:size-12 xl:size-16">
        <Image
          src={preview}
          alt={title}
          fill
          className="rounded-hero-lg object-contain"
          unoptimized
          placeholder="blur"
          blurDataURL="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WA8AAkcBYnr93DQAAAAASUVORK5CYII="
        />
      </div>

      <div className="w-full overflow-hidden">
        <h3 className="mb-2 truncate text-sm/4.5 font-semibold uppercase">
          {title}
        </h3>
        <p className="text-foreground/80 md:text-10/3.5 line-clamp-2 text-xs/3 md:line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default PopularRecipesItem;
