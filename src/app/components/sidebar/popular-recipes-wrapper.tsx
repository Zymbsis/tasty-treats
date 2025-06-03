import PopularRecipesList from "@app/components/sidebar/popular-recipes-list";
import { getPopularRecipes } from "@app/lib/services/api";

const PopularRecipesWrapper = async () => {
  const recipes = await getPopularRecipes();

  return (
    <>
      <h2 className="mb-5 text-lg/snug font-semibold uppercase md:mb-8 xl:text-2xl/7">
        Popular recipes
      </h2>
      <PopularRecipesList recipes={recipes} />
    </>
  );
};

export default PopularRecipesWrapper;
