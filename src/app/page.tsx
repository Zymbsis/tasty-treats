import { Suspense } from "react";
import Hero from "@/components/hero/hero";
import Sidebar from "@/components/sidebar/sidebar";
import FilterBar from "@/components/filter-bar/filter-bar";
import Recipes from "@/components/recipes/recipes";
import { SEARCH_PARAMS, SearchParamsType } from "@/lib/constants/search-params";
import { ScrollShadow } from "@heroui/react";

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
    >
      <ScrollShadow
        hideScrollBar
        size={30}
        className="xs:px-5 h-[calc(100vh-72px)] pt-[64px] md:h-[calc(100vh-80px)] md:px-8 md:pt-[61px] xl:h-[calc(100vh-104px)] xl:px-[100px] xl:pt-[56px]"
      >
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
      </ScrollShadow>
    </main>
  );
}
