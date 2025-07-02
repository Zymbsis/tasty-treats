import { HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-client";

type ToggleMenuButtonProps = HTMLMotionProps<"button"> & {
  isOpen: boolean;
};

const pathVariants = [
  {
    closed: { d: "M4 8.5 L28 8.5" },
    open: { d: "M8 8.5 L24 24.5" },
  },
  {
    closed: { d: "M4 13.8333 L28 13.8333" },
    open: { d: "M8 8.5 L24 24.5" },
  },
  {
    closed: { d: "M4 19.1667 L28 19.1667" },
    open: { d: "M8 24.5 L24 8.5" },
  },
  {
    closed: { d: "M4 24.5 L28 24.5" },
    open: { d: "M8 24.5 L24 8.5" },
  },
];

const Path = ({ ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    className="stroke-current transition-colors"
    strokeLinecap="round"
    transition={{ duration: 0.2 }}
    {...props}
  />
);

const ToggleMenuButton = ({ isOpen, ...props }: ToggleMenuButtonProps) => {
  return (
    <motion.button
      animate={isOpen ? "open" : "closed"}
      initial={false}
      className="text-foreground hover:text-accent cursor-pointer md:hidden"
      {...props}
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        {pathVariants.map((variants, index) => (
          <Path key={index} variants={variants} />
        ))}
      </svg>
    </motion.button>
  );
};

export default ToggleMenuButton;
