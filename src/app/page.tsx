import FilterBar from "@app/components/filter-bar/filter-bar";
import Hero from "@app/components/hero/hero";
import Sidebar from "@app/components/sidebar/sidebar";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col gap-10 py-20 md:flex-row md:gap-8 md:pb-24 xl:gap-16 xl:pt-24">
        <Sidebar />
        <section>
          <FilterBar />
        </section>
      </div>
    </main>
  );
}
