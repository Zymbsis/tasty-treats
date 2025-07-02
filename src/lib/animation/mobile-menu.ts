const INITIAL_STATE = { opacity: 0, visibility: "hidden" as const };

const OVERLAY_VARIANTS = {
  open: {
    opacity: 1,
    visibility: "visible",
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      visibility: "hidden",
    },
  },
};

const LINE_VARIANTS = {
  open: {
    width: "100vw",
    transition: { ease: "easeInOut" as const, duration: 0.6 },
  },
  closed: {
    width: 0,
    transition: { ease: "easeInOut" as const, duration: 0.6 },
  },
};

const MENU_VARIANTS = {
  open: {
    transition: {
      type: "spring" as const,
      stiffness: 200,
      restDelta: 1,
      damping: 25,
    },
    y: "72px",
  },
  closed: {
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 40,
    },
    y: "-100%",
  },
};

export { INITIAL_STATE, OVERLAY_VARIANTS, LINE_VARIANTS, MENU_VARIANTS };
