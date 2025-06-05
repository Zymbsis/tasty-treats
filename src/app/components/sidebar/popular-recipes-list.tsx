import PopularRecipesItem from "@app/components/sidebar/popular-recipes-item";
import { PopularRecipe } from "@app/lib/types/api.types";

const PopularRecipesList = ({ recipes }: { recipes: PopularRecipe[] }) => {
  return (
    <ul className="animate-fade-in custom-scrollbar flex max-h-[158px] flex-col gap-6 overflow-y-auto pr-2 md:max-h-[320px] md:gap-4 xl:max-h-[368px] xl:gap-8">
      {recipes.map(recipe => (
        <li key={recipe._id} className="flex gap-4 md:gap-2 xl:gap-4">
          <PopularRecipesItem {...recipe} />
        </li>
      ))}
    </ul>
  );
};

export default PopularRecipesList;
