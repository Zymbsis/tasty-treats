import Pagination from "@/components/recipes/pagination";
import RecipesList from "@/components/recipes/recipes-list";
import { SearchParamsType } from "@/lib/constants/search-params";
import { getRecipes } from "@/lib/services/api";

const Recipes = async ({ query }: { query: SearchParamsType }) => {
  const data = await getRecipes(query);
  if (!data) return null;

  const { results, ...paginationMetadata } = data;

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
