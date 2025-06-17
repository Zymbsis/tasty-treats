import PaginationWrapper from "@/components/recipes/pagination-wrapper";
import RecipesList from "@/components/recipes/recipes-list";
import PerPageController from "@/components/ui/per-page-controller";
import { SearchParamsType } from "@/lib/constants/search-params";
import { getRecipes } from "@/lib/services/api";

const Recipes = async ({ query }: { query: SearchParamsType }) => {
  const data = await getRecipes(query);

  if (!data) return null;

  const { results, ...paginationMetadata } = data;
  const { page, totalPages } = paginationMetadata;

  const isPaginationShown = totalPages > 1 && +page <= totalPages;

  return (
    <>
      <PerPageController query={query} />
      {query.limit && (
        <>
          <RecipesList recipes={results} />
          {isPaginationShown && (
            <PaginationWrapper paginationMetadata={paginationMetadata} />
          )}
        </>
      )}
    </>
  );
};

export default Recipes;
