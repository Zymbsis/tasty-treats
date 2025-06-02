import { Suspense } from "react";
import Hero from "@app/components/hero/hero";
import Sidebar from "@app/components/sidebar/sidebar";
import FilterBar from "@app/components/filter-bar/filter-bar";

export default function Home() {
  return (
    <main className="animate-fade-in">
      <Hero />
      <div className="flex flex-col gap-16 py-20 md:flex-row md:gap-8 md:pb-24 xl:gap-16 xl:pt-24">
        <Sidebar />
        <section>
          <Suspense fallback="Loading...">
            <FilterBar />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
