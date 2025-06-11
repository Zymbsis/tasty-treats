import { SearchParamsType } from "@/lib/constants/search-params";
import {
  Area,
  Category,
  Event,
  FullRecipe,
  Ingredient,
  PaginatedRecipes,
  PopularRecipe,
} from "@/lib/types/api.types";

const BASE_URL = "https://tasty-treats-backend.p.goit.global/api";

export const getCategories = async (): Promise<Category[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(`${BASE_URL}/categories`);

  return await response.json();
};

export const getPopularRecipes = async (): Promise<PopularRecipe[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(`${BASE_URL}/recipes/popular`);

  return await response.json();
};

export const getEvents = async (): Promise<Event[]> => {
  // await new Promise(res => setTimeout(res, 3000));
  // throw new Error("Hello Error");
  const response = await fetch(`${BASE_URL}/events`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  return await response.json();
};

export const getIngredients = async (): Promise<Ingredient[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(`${BASE_URL}/ingredients`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  return await response.json();
};

export const getAreas = async (): Promise<Area[]> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(`${BASE_URL}/areas`, {
    cache: "force-cache",
    next: { revalidate: 3600 },
  });

  return await response.json();
};

export const getRecipes = async (
  query: SearchParamsType,
): Promise<PaginatedRecipes> => {
  // await new Promise(res => setTimeout(res, 5000));
  const searchParams = new URLSearchParams(query);

  const response = await fetch(`${BASE_URL}/recipes?${searchParams}`);

  return await response.json();
};

export const getRecipeById = async (id: string): Promise<FullRecipe> => {
  // await new Promise(res => setTimeout(res, 5000));
  const response = await fetch(`${BASE_URL}/recipes/${id}`);

  return await response.json();
};
