import Logo from "@/components/header/logo";
import Menu from "@/components/header/menu";
import NavLinks from "@/components/header/nav-links";
import ThemeSwitch from "@/components/header/theme-switch";

const Header = () => {
  return (
    <header className="bg-background fixed top-0 left-0 z-50 h-[72px] w-full md:h-[80px] xl:h-[104px]">
      <div className="xs:w-[375px] xs:px-5 relative mx-auto flex h-full w-full items-center justify-between md:w-[768px] md:px-8 xl:w-[1280px] xl:px-[100px]">
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <Logo />
        <div className="hidden items-center md:flex">
          <ThemeSwitch />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
