const HeroDescription = () => {
  return (
    <div className="md:w-md">
      <h1 className="text-26/tight mb-3.5 font-semibold uppercase md:mb-4 md:text-4xl/tight">
        Learn to Cook{" "}
        <span className="text-accent italic">Tasty Treats&apos;</span>{" "}
        Customizable Masterclass
      </h1>
      <h2 className="text-14/tight md:text-16/normal">
        TastyTreats - Customize Your Meal with Ingredient{" "}
        <br className="hidden md:block" /> Options and Step-by-Step Video
        Guides.
      </h2>
    </div>
  );
};

export default HeroDescription;
