import { Button as HeroButton, extendVariants } from "@heroui/react";

export const Button = extendVariants(HeroButton, {
  variants: {
    variant: {
      light: "data-[hover=true]:bg-transparent",
    },
    color: { secondary: "text-foreground/50" },
  },
});
