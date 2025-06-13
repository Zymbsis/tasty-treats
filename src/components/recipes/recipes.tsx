import Pagination from "@/components/recipes/pagination";
import PaginationWrapper from "@/components/recipes/pagination-wrapper";
import RecipesList from "@/components/recipes/recipes-list";
import { SEARCH_PARAMS, SearchParamsType } from "@/lib/constants/search-params";
import { getRecipes } from "@/lib/services/api";

const Recipes = async ({ query }: { query: SearchParamsType }) => {
  const data = await getRecipes(query);

  if (!data) return null;

  const { results, ...paginationMetadata } = data;

  return (
    <>
      {query[SEARCH_PARAMS.LIMIT] && <RecipesList recipes={results} />}
      <PaginationWrapper>
        {query[SEARCH_PARAMS.LIMIT] && paginationMetadata.totalPages > 1 && (
          <Pagination paginationMetadata={paginationMetadata} />
        )}
      </PaginationWrapper>
    </>
  );
};

export default Recipes;
