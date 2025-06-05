import { Suspense } from "react";
import CategoriesWrapper from "@app/components/sidebar/categories-wrapper";
import PopularRecipesWrapper from "@app/components/sidebar/popular-recipes-wrapper";
import PopularRecipesSkeleton from "@app/components/skeletons/popular-recipes-skeleton";

const Sidebar = () => {
  return (
    <aside className="shrink-0 md:w-[176px] xl:w-[235px]">
      <Suspense fallback="Loading...">
        <CategoriesWrapper />
      </Suspense>
      <Suspense fallback={<PopularRecipesSkeleton />}>
        <PopularRecipesWrapper />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
