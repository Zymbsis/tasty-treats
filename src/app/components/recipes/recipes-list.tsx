import RecipeItem from "@app/components/recipes/recipe-item";
import { FullRecipe } from "@app/lib/types/api.types";

const RecipesList = ({ recipes }: { recipes: FullRecipe[] }) => {
  return (
    <ul className="flex flex-col gap-6 pb-10 md:flex-row md:flex-wrap md:gap-4 md:pb-16 xl:gap-y-8">
      {recipes.map(recipe => (
        <li
          key={recipe._id}
          style={{
            backgroundImage: `var(--recipe-gradient), url(${recipe.preview})`,
          }}
          className="relative aspect-square w-full rounded-lg md:h-[264px] md:w-[calc((100%-16px)/2)] xl:h-[287px] xl:w-[calc((100%-32px)/3)]"
        >
          <RecipeItem recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
