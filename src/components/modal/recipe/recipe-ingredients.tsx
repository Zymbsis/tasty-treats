import { FullRecipeIngredient } from "@/lib/types/api.types";
import { Divider } from "@heroui/react";

const RecipeIngredients = ({
  ingredients,
}: {
  ingredients: FullRecipeIngredient[];
}) => {
  return (
    <ul>
      {ingredients.map(ingredient => (
        <li
          key={ingredient.id}
          className="relative flex justify-between pt-3.5 pb-2 text-sm/4.5 md:pt-2.5"
        >
          <span className="">{ingredient.name}</span>
          <span className="text-foreground/50">{ingredient.measure}</span>
          <Divider className="absolute bottom-0" />
        </li>
      ))}
    </ul>
  );
};

export default RecipeIngredients;
