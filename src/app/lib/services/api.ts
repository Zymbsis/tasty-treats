import { SearchParamsType } from "@app/lib/constants/search-params";
import {
  Area,
  Category,
  Event,
  Ingredient,
  PaginatedRecipes,
  PopularRecipe,
} from "@app/lib/types/api.types";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/categories",
  );
  const data = await response.json();

  return data;
};

export const getPopularRecipes = async (): Promise<PopularRecipe[]> => {
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/recipes/popular",
  );
  const data = await response.json();

  return data;
};

export const getEvents = async (): Promise<Event[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/events",
  );
  const data = await response.json();
  return data;
};

export const getIngredients = async (): Promise<Ingredient[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/ingredients",
  );
  const data = await response.json();
  return data;
};

export const getAreas = async (): Promise<Area[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/areas",
  );
  const data = await response.json();
  return data;
};

export const getRecipes = async (
  query: SearchParamsType,
): Promise<PaginatedRecipes> => {
  const searchParams = new URLSearchParams(query);

  const response = await fetch(
    `https://tasty-treats-backend.p.goit.global/api/recipes?${searchParams}`,
  );
  const data = await response.json();
  return data;
};
