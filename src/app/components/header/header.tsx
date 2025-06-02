import Logo from "@app/components/header/logo";
import Menu from "@app/components/header/menu";
import NavLinks from "@app/components/header/nav-links";
import ThemeSwitch from "@app/components/header/theme-switch";

const Header = () => {
  return (
    <header className="relative flex justify-between py-5 md:py-7 xl:py-10">
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <Logo />
      <div className="hidden items-center md:flex">
        <ThemeSwitch />
      </div>
      <Menu />
    </header>
  );
};

export default Header;
