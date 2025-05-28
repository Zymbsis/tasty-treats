export const GET = async () => {
  const data = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/categories",
  );
  const categories = await data.json();

  return categories;
};
