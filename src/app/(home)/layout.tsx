import FilterBarWrapper from "@/components/filter-bar/filter-bar-wrapper";
import Hero from "@/components/hero/hero";
import Sidebar from "@/components/sidebar/sidebar";
import FilterBarSkeleton from "@/components/skeletons/filter-bar-skeleton";
import { ReactNode, Suspense } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-[64px] md:pt-[61px] xl:pt-[56px]">
      <Hero />
      <div className="flex flex-col gap-16 pt-20 md:flex-row md:gap-8 xl:gap-16 xl:pt-24">
        <Sidebar />
        <section>
          <Suspense fallback={<FilterBarSkeleton />}>
            <FilterBarWrapper />
          </Suspense>
          {children}
        </section>
      </div>
    </main>
  );
};

export default Layout;
