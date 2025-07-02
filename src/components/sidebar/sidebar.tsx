import { Suspense } from "react";
import CategoriesWrapper from "@/components/sidebar/categories-wrapper";
import PopularRecipesWrapper from "@/components/sidebar/popular-recipes-wrapper";
import PopularRecipesSkeleton from "@/components/skeletons/popular-recipes-skeleton";
import CategoriesSkeleton from "@/components/skeletons/categories-skeleton";

const Sidebar = () => {
  return (
    <aside className="flex shrink-0 flex-col gap-10 md:w-[176px] md:gap-16 xl:w-[235px]">
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesWrapper listType="vertical" />
      </Suspense>
      <Suspense fallback={<PopularRecipesSkeleton />}>
        <PopularRecipesWrapper />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
