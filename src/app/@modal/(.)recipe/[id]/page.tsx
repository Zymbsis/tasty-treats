import Modal from "@/components/modal/modal";
import RecipeModalContent from "@/components/modal/recipe/recipe-modal-content";
import { getRecipeById } from "@/lib/services/api";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const recipe = await getRecipeById(id);
  if (!recipe) return null;

  return (
    <Modal>
      <RecipeModalContent selectedRecipe={recipe} />
    </Modal>
  );
};

export default Page;
