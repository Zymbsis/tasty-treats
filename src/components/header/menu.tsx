"use client";

import NavLinks from "@/components/header/nav-links";
import ThemeSwitch from "@/components/header/theme-switch";
import ToggleMenuButton from "@/components/header/toggle-menu-button";
import { FavoriteRecipesContext } from "@/components/ui/favorite-recipes-provider";
import {
  INITIAL_STATE,
  LINE_VARIANTS,
  MENU_VARIANTS,
  OVERLAY_VARIANTS,
} from "@/lib/animation/mobile-menu";
import * as motion from "motion/react-client";
import { use, useState } from "react";
import { createPortal } from "react-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isHydrated } = use(FavoriteRecipesContext);

  const handleToggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.style.overflow = newState ? "hidden" : "visible";
  };

  const renderMenuContent = () => (
    <motion.div
      onClick={handleToggleMenu}
      animate={isOpen ? "open" : "closed"}
      initial={INITIAL_STATE}
      variants={OVERLAY_VARIANTS}
      className="bg-overlay/30 fixed inset-0 z-30 backdrop-blur-sm"
    >
      <motion.div
        variants={LINE_VARIANTS}
        className="bg-accent absolute top-[72px] left-1/2 z-20 h-[1px] -translate-x-1/2"
      />
      <motion.div
        variants={MENU_VARIANTS}
        className="border-accent bg-background absolute top-0 left-0 z-10 flex h-[50vh] w-full flex-col rounded-b-lg border-b-1 p-10"
      >
        <NavLinks />
        <ThemeSwitch />
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <ToggleMenuButton onClick={handleToggleMenu} isOpen={isOpen} />
      {isHydrated && createPortal(renderMenuContent(), document.body)}
    </>
  );
};

export default Menu;
