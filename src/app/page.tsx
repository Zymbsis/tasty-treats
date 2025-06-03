import { Suspense } from "react";
import Hero from "@app/components/hero/hero";
import Sidebar from "@app/components/sidebar/sidebar";
import FilterBar from "@app/components/filter-bar/filter-bar";
import Recipes from "@app/components/recipes/recipes";
import {
  SEARCH_PARAMS,
  SearchParamsType,
} from "@app/lib/constants/search-params";

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
    <main className="animate-fade-in">
      <Hero />
      <div className="flex flex-col gap-16 py-20 md:flex-row md:gap-8 md:pb-24 xl:gap-16 xl:pt-24">
        <Sidebar />
        <section>
          <Suspense fallback="Loading...">
            <FilterBar />
          </Suspense>
          <Suspense fallback="Loading...">
            <Recipes query={extractedQuery} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
