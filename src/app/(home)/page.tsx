import { Suspense } from "react";
import Recipes from "@/components/recipes/recipes";
import { SEARCH_PARAMS, SearchParamsType } from "@/lib/constants/search-params";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const query = await searchParams;
  const extractedQuery: SearchParamsType = {};

  Object.values(SEARCH_PARAMS).forEach(item => {
    if (query[item] && typeof query[item] === "string")
      extractedQuery[item] = query[item];
  });

  return (
    <Suspense fallback="Loading...">
      <Recipes query={extractedQuery} />
    </Suspense>
  );
}
