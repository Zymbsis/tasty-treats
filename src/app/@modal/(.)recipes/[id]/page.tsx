import RecipeModal from "@/components/modal/recipe-modal";
import RecipeModalContent from "@/components/modal/recipe/recipe-modal-content";
import { getRecipeById } from "@/lib/services/api";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const recipe = await getRecipeById(id);

  if (!recipe) return null;

  return (
    <RecipeModal>
      <RecipeModalContent selectedRecipe={recipe} />
    </RecipeModal>
  );
};

export default Page;
