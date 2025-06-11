"use client";

import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import ThemeSwitch from "@/components/header/theme-switch";
import NavLinks from "@/components/header/nav-links";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Menu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="light"
        size="sm"
        onPress={onOpen}
        className="text-foreground data-[hover=true]:text-accent data-[hover=true]:bg-transparent md:hidden"
        isIconOnly
      >
        <Bars4Icon />
      </Button>
      <Drawer
        classNames={{
          base: "max-w-2/3 p-5",
          closeButton:
            "text-hover-foreground data-[hover=true]:bg-transparent data-[hover=true]:text-active-foreground data-[hover=true]:dark:text-accent",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        radius="none"
        closeButton={
          <Button isIconOnly size="lg" variant="light">
            <XMarkIcon />
          </Button>
        }
      >
        <DrawerContent>
          {onClose => (
            <>
              <DrawerBody className="items-center justify-center p-0">
                <NavLinks onClick={onClose} />
              </DrawerBody>
              <DrawerFooter className="justify-start p-0">
                <ThemeSwitch />
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Menu;
