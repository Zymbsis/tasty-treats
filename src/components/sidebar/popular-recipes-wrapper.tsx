import PopularRecipesList from "@/components/sidebar/popular-recipes-list";
import { getPopularRecipes } from "@/lib/services/api";

const PopularRecipesWrapper = async () => {
  const recipes = await getPopularRecipes();

  return (
    <div>
      <h2 className="mb-5 text-lg/snug font-semibold whitespace-nowrap uppercase md:mb-8 xl:text-2xl/7">
        Popular recipes
      </h2>
      {Array.isArray(recipes) ? (
        <PopularRecipesList recipes={recipes} />
      ) : (
        <div>Nothing found</div>
      )}
    </div>
  );
};

export default PopularRecipesWrapper;
