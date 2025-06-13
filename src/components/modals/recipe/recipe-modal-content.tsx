import RecipeFooter from "@/components/modals/recipe/recipe-footer";
import RecipeIngredients from "@/components/modals/recipe/recipe-ingredients";
import RecipeTags from "@/components/modals/recipe/recipe-tags";
import Rating from "@/components/ui/rating";
import { extractYouTubeId } from "@/lib/utils/extract-youTube-id";
import { FullRecipe } from "@/lib/types/api.types";
import { ModalBody } from "@heroui/react";
import { YouTubeEmbed } from "@next/third-parties/google";

import Image from "next/image";

type Props = {
  selectedRecipe: FullRecipe;
  isFavorite?: boolean;
  handleToggleToFavorite?: () => void;
};
const RecipeModalContent = ({ selectedRecipe }: Props) => {
  const {
    title,
    youtube,
    tags,
    rating,
    time,
    ingredients,
    instructions,
    preview,
  } = selectedRecipe;
  const videoId = extractYouTubeId(youtube);

  return (
    <>
      <ModalBody>
        {videoId && (
          <YouTubeEmbed
            style={`border-radius: 8px; background-image: url(${preview});`}
            videoid={videoId}
            params="controls=1"
          />
        )}

        {!videoId && (
          <div className="relative h-[295px] w-full shrink-0 md:h-[250px]">
            <Image
              src={preview}
              fill
              sizes="500px"
              alt={title}
              className="rounded-sm object-cover"
            />
          </div>
        )}

        <div className="mt-4 mb-8 flex flex-col gap-3.5 md:gap-4">
          <h2 className="text-lg/6 font-semibold uppercase">{title}</h2>
          {tags.join() && <RecipeTags tags={tags} />}
          <div className="text-foreground/50 flex gap-1.5 text-sm/4.5 font-medium">
            <Rating
              rating={rating}
              className="gap-1.5 text-inherit"
              starSize="size-[18px]"
            />
            <span className="ml-2.5 md:ml-0.5">{`${time} min`}</span>
          </div>
        </div>

        <RecipeIngredients ingredients={ingredients} />

        <p className="mt-8 text-sm/4.5 whitespace-pre-line">{instructions}</p>
      </ModalBody>
      <RecipeFooter _id={selectedRecipe._id} />
    </>
  );
};

export default RecipeModalContent;
