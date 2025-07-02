import * as motion from "motion/react-client";

const HeroDescription = () => {
  return (
    <div className="mb-12 shrink-0 overflow-x-hidden md:mb-16 md:w-md xl:mb-0 xl:pt-16">
      <h1 className="text-26/tight mb-3.5 font-semibold uppercase md:mb-4 md:text-4xl/tight">
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-block"
        >
          Learn to Cook <span className="text-accent italic">Tasty</span>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-block"
        >
          <span className="text-accent italic">Treats&apos;</span> Customizable
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-block"
        >
          Masterclass
        </motion.span>
      </h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="text-sm/tight md:w-[408px] md:text-base/normal"
      >
        TastyTreats - Customize Your Meal with Ingredient Options and
        Step-by-Step Video Guides.
      </motion.h2>
    </div>
  );
};

export default HeroDescription;
