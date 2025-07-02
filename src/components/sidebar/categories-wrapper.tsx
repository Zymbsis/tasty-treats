import CategoriesList from "@/components/sidebar/categories-list";
import { getCategories } from "@/lib/services/api";

export type ListType = "horizontal" | "vertical";

const CategoriesWrapper = async ({ listType }: { listType: ListType }) => {
  const categories = await getCategories();
  if (!categories) return null;

  return <CategoriesList listType={listType} categories={categories} />;
};

export default CategoriesWrapper;
