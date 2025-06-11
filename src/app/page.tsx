import { Suspense } from "react";
import Hero from "@/components/hero/hero";
import Sidebar from "@/components/sidebar/sidebar";
import FilterBarWrapper from "@/components/filter-bar/filter-bar-wrapper";
import Recipes from "@/components/recipes/recipes";
import { SEARCH_PARAMS, SearchParamsType } from "@/lib/constants/search-params";
import FilterBarSkeleton from "@/components/skeletons/filter-bar-skeleton";

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
    <main
      // className="animate-fade-in"
      className="pt-[64px] pb-20 md:pt-[61px] md:pb-[100px] xl:pt-[56px]"
    >
      <Hero />
      <div className="flex flex-col gap-16 pt-20 md:flex-row md:gap-8 xl:gap-16 xl:pt-24">
        <Sidebar />
        <section>
          <Suspense fallback={<FilterBarSkeleton />}>
            <FilterBarWrapper />
          </Suspense>
          <Suspense fallback="Loading...">
            <Recipes query={extractedQuery} />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
