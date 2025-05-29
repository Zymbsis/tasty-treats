import CategoriesWrapper from "@app/components/sidebar/categories-wrapper";
import PopularRecipesWrapper from "@app/components/sidebar/popular-recipes-wrapper";
import { Suspense } from "react";

const Sidebar = () => {
  return (
    <aside className="md:w-[176px] xl:w-[235px]">
      <Suspense fallback="Loading...">
        <CategoriesWrapper />
      </Suspense>
      <Suspense fallback="Loading...">
        <PopularRecipesWrapper />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
