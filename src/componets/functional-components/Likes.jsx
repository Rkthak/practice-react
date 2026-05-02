import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Likes = () => {
  const recipes = [
    {
      name: "Classic Margherita Pizza",
      prepTime: "30 minutes",
      difficulty: "Medium",
      mainIngredient: "Mozzarella",
      isFavourite: false,
    },
    {
      name: "Avocado Toast",
      prepTime: "5 minutes",
      difficulty: "Easy",
      mainIngredient: "Avocado",
      isFavourite: true,
    },
    {
      name: "Spaghetti Carbonara",
      prepTime: "20 minutes",
      difficulty: "Medium",
      mainIngredient: "Eggs",
      isFavourite: false,
    },
    {
      name: "Grilled Salmon",
      prepTime: "15 minutes",
      difficulty: "Easy",
      mainIngredient: "Salmon",
      isFavourite: true,
    },
  ];

  return (
    <div className="container p-2">
      <h1 className="text-2xl font-medium text-purple-500">Recipies</h1>
      <ul className="flex flex-wrap justify-between mt-3.5 gap-5">
        {recipes.map((recipe, index) => {
          return (
            <li key={index} className="border-2 border-gray-300 p-2 min-w-2xs">
              <div className="flex justify-between items-center">
                <h1 className="mb-1 font-semibold"> {recipe.name} </h1>
                <span>
                  {recipe.isFavourite ? (
                    <FaHeart color="red" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
              </div>
              <hr />
              <p>Ingredient: {recipe.mainIngredient} </p>
              <p> {recipe.prepTime} </p> <p> {recipe.difficulty} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Likes;
