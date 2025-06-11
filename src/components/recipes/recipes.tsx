import Pagination from "@/components/recipes/pagination";
import RecipesList from "@/components/recipes/recipes-list";
import { SearchParamsType } from "@/lib/constants/search-params";
import { getRecipes } from "@/lib/services/api";

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
