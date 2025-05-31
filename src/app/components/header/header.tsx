import Logo from "@app/components/header/logo";
import NavLinks from "@app/components/header/nav-links";
import ThemeSwitch from "@app/components/header/theme-switch";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="relative flex justify-between py-5 md:py-7 xl:py-10">
      <NavLinks />
      <Logo />
      <ThemeSwitch />
      <button type="button" className="size-8 cursor-pointer md:hidden">
        <Bars4Icon />
      </button>
    </header>
  );
};

export default Header;
