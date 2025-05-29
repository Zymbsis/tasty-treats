export type Category = {
  _id: string;
  name: string;
};
export type Recipe = {
  _id: string;
  title: string;
  description: string;
  preview: string;
  popularity: number;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/categories",
  );
  const data = await response.json();

  return data;
};

export const getPopularRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/recipes/popular",
  );
  const data = await response.json();

  return data;
};
