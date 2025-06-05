import RecipeFooter from "@app/components/modals/recipe/recipe-footer";
import RecipeIngredients from "@app/components/modals/recipe/recipe-ingredients";
import RecipeTags from "@app/components/modals/recipe/recipe-tags";
import Rating from "@app/components/ui/rating";
import { extractYouTubeId } from "@app/components/ui/extract-youTube-id";
import { FullRecipe } from "@app/lib/types/api.types";
import { Modal, ModalBody, ModalContent, ModalProps } from "@heroui/react";
import { YouTubeEmbed } from "@next/third-parties/google";

import Image from "next/image";

type Props = Omit<ModalProps, "children"> & {
  selectedRecipe: FullRecipe;
  isFavorite: boolean;
  handleToggleToFavorite: () => void;
};

const RecipeModalContent = ({
  isOpen,
  onOpenChange,
  selectedRecipe,
  isFavorite,
  handleToggleToFavorite,
}: Props) => {
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
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      placement="center"
      classNames={{
        base: "max-w-none w-[335px] md:w-[531px] pl-5 pr-3 py-10 md:p-8 md:pt-10 md:pr-6 bg-background",
        body: "p-0 gap-0 custom-scrollbar pr-2",
        footer:
          "p-0 pt-8 justify-center md:justify-start gap-3.5 md:gap-4 h-[73px] md:h-[77px] shrink-0 pr-2",
        closeButton:
          "p-0 hover:bg-transparent hover:text-accent active:bg-transparent top-3.5 right-3.5 [&>svg]:size-5 cursor-pointer",
      }}
    >
      <ModalContent>
        <ModalBody>
          {videoId && (
            <YouTubeEmbed
              style={`border-radius: 8px; background-image: url(${preview});`}
              videoid={videoId}
              params="controls=1"
            />
          )}

          {!videoId && (
            <div className="relative">
              <Image
                src={preview}
                fill
                sizes="500px"
                alt={title}
                className="object-cover"
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
        <RecipeFooter
          handleToggleToFavorite={handleToggleToFavorite}
          favoriteButtonTitle={
            isFavorite ? "Remove from favorite" : "Add to favorite"
          }
        />
      </ModalContent>
    </Modal>
  );
};

export default RecipeModalContent;
