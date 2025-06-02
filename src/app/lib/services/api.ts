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
export type EventCook = {
  name: string;
  imgUrl: string;
  imgWebpUrl: string;
};
export type EventTopic = {
  name: string;
  area: string;
  previewUrl: string;
  imgUrl: string;
  imgWebpUrl: string;
  previewWebpUrl: string;
};
export type Event = {
  _id: string;
  cook: EventCook;
  topic: EventTopic;
};
export type Ingredient = {
  _id: string;
  name: string;
  desc: string;
  img: string;
};
export type Area = {
  _id: string;
  name: string;
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
