import Pagination from "@app/components/recipes/pagination";
import RecipesList from "@app/components/recipes/recipes-list";
import { SearchParamsType } from "@app/lib/constants/search-params";
import { getRecipes } from "@app/lib/services/api";

const Recipes = async ({ query }: { query: SearchParamsType }) => {
  const { results, ...paginationMetadata } = await getRecipes(query);

  return (
    <>
      <RecipesList recipes={results} />
      {paginationMetadata.totalPages > 1 && (
        <Pagination paginationMetadata={paginationMetadata} />
      )}
    </>
  );
};

export default Recipes;
