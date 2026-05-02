import React from "react";

const Likes = () => {
  const recipes = [
    "biryani",
    "samosa",
    "burger",
    "pizza",
    "onion garlic bread sanwich",
  ];
  return (
    <div>
      <h1>Recipies</h1>
      <ul>
        {recipes.map((recipe, index) => {
          return <li key={index}> {recipe.toUpperCase()} </li>;
        })}
      </ul>
    </div>
  );
};

export default Likes;
