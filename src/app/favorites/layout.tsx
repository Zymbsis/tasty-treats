import { CSSProperties, ReactNode } from "react";
import bgMobile from "../../../public/favorites-bg-mobile.png";
import bgTablet from "../../../public/favorites-bg-tablet.png";
import bgDesktop from "../../../public/favorites-bg-desktop.png";
import CategoriesWrapper from "@/components/sidebar/categories-wrapper";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-6 md:pt-5 xl:pb-0">
      <section className="flex flex-col gap-10 md:gap-16">
        <div
          style={
            {
              "--bg-mobile": `url(${bgMobile.src})`,
              "--bg-tablet": `url(${bgTablet.src})`,
              "--bg-desktop": `url(${bgDesktop.src})`,
            } as CSSProperties
          }
          className="h-[516px] bg-(image:--bg-mobile) bg-cover bg-no-repeat md:h-[356px] md:bg-(image:--bg-tablet) xl:bg-(image:--bg-desktop)"
        ></div>
        <CategoriesWrapper />
      </section>
      {children}
    </main>
  );
};

export default Layout;
