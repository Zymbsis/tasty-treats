import { heroui } from "@heroui/react";
export default heroui({
  addCommonColors: true,
  layout: {
    radius: {
      small: "8px",
      medium: "12px",
      large: "14px",
    },
    borderWidth: {
      medium: "1px",
      large: "2px",
    },
  },
  themes: {
    light: {
      colors: {
        background: "#f8f8f8",
        foreground: {
          foreground: "#050505",
          500: "#7e7e7e",
        },
        divider: {},
        overlay: {},
        focus: {},
        content1: { DEFAULT: "#9bb537" },
        content2: {},
        content3: {},
        content4: {},
        default: { foreground: "#9b9b9b", 200: "#c7c7c7", 400: "#969696" },
        primary: { DEFAULT: "#9BB537", foreground: "#F8F8F8" },
        secondary: {},
        success: {},
        warning: {},
        danger: {},
      },
    },
    dark: {
      colors: {
        background: "#161616",
        foreground: { foreground: "#ffffff", 500: "#8a8a8a" },
        default: { foreground: "#676767", 200: "#3e3e3e", 400: "#676767" },
        primary: { foreground: "#FFFFFF", DEFAULT: "#9BB537" },
        secondary: {},
        content1: { DEFAULT: "#050505" },
        content2: { foreground: "green" },
      },
    },
  },
});
