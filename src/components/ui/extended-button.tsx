import { Button, extendVariants } from "@heroui/react";

const ExtendedButton = extendVariants(Button, {
  variants: {
    color: {
      primary: "",
      secondary: "text-foreground/30",
    },
    size: {
      sm: "text-sm/4.5 md:text-base/5",
      md: "text-lg/5.5",
    },
    variant: {
      solid: "border border-transparent",
      bordered: "",
      light: "data-[hover=true]:bg-transparent",
    },
  },
  defaultVariants: {
    disableRipple: "true",
    radius: "lg",
  },
  compoundVariants: [
    {
      variant: ["bordered", "solid", "light"],
      class: "data-[hover=true]:opacity-100! h-auto font-medium",
    },
    {
      variant: ["bordered", "solid"],
      class: "py-3 px-4 hover:bg-accent",
    },
    {
      variant: "bordered",
      color: "primary",
      class: "",
    },
    {
      variant: "bordered",
      color: "secondary",
      class:
        "border-foreground/20 hover:border-accent hover:text-hover-foreground",
    },
    {
      variant: "solid",
      color: "primary",
      class: "hover:text-slide",
    },
    {
      variant: "light",
      color: "secondary",
      class: "hover:text-accent",
    },
    {
      variant: "light",
      color: "primary",
      class: "text-accent ",
    },
    {
      variant: "light",
      class: "px-0 py-2 md:py-2.5",
    },
  ],
});

export default ExtendedButton;
