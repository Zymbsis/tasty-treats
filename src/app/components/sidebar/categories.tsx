import mockData from "../mock.json";

const Categories = () => {
  return (
    <div>
      <ul>
        {mockData.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
