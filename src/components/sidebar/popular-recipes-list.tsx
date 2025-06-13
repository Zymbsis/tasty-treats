import PopularRecipesItem from "@/components/sidebar/popular-recipes-item";
import PopularRecipesItemWrapper from "@/components/sidebar/popular-recipes-item-wrapper";
import { PopularRecipe } from "@/lib/types/api.types";

const PopularRecipesList = ({ recipes }: { recipes: PopularRecipe[] }) => {
  return (
    <ul className="animate-fade-in custom-scrollbar flex max-h-[158px] flex-col gap-6 overflow-y-auto pr-2 md:max-h-[320px] md:gap-4 xl:max-h-[368px] xl:gap-8">
      {recipes.map(recipe => (
        <PopularRecipesItemWrapper _id={recipe._id} key={recipe._id}>
          {<PopularRecipesItem {...recipe} />}
        </PopularRecipesItemWrapper>
      ))}
    </ul>
  );
};

export default PopularRecipesList;
