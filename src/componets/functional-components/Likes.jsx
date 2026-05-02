import React, { useEffect, useState } from "react";

const Likes = () => {
  const [recipes, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://69f598aafb098eb7f0b55dc2.mockapi.io/recipe")
      .then((reponse) => reponse.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container p-2">
      <h1 className="text-2xl font-medium text-purple-500">Recipies</h1>
      <ul className="flex justify-between flex-wrap mt-3.5 gap-9">
        {recipes.map((recipe, index) => {
          return (
            <li key={index} className="border-2 border-gray-300 p-2 min-w-2xs">
              <h1 className="mb-1 font-semibold"> {recipe.name} </h1>
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
