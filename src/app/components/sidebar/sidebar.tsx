import Categories from "@app/components/sidebar/categories";
import PopularRecipes from "@app/components/sidebar/popular-recipes";
import { Suspense } from "react";

const Sidebar = () => {
  return (
    <aside className="md:w-[176px]">
      <Suspense fallback="Loading...">
        <Categories />
      </Suspense>
      <Suspense fallback="Loading...">
        <PopularRecipes />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
