import PopularRecipesItem from "@app/components/sidebar/popular-recipes-item";
import { Recipe } from "@app/lib/services/api";

type Props = {
  recipes: Recipe[];
};

const PopularRecipesList = ({ recipes }: Props) => {
  return (
    <ul className="custom-scrollbar flex max-h-[158px] flex-col gap-6 overflow-y-auto pr-2 md:max-h-[304px] md:gap-4 xl:max-h-[352px] xl:gap-8">
      {recipes.map(recipe => (
        <li key={recipe._id} className="flex gap-4 md:gap-2 xl:gap-4">
          <PopularRecipesItem {...recipe} />
        </li>
      ))}
    </ul>
  );
};

export default PopularRecipesList;
