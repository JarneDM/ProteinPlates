// frontend/src/components/RecipeList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ category }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/pages/${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, [category]);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.instructions[0]}</p> {/* Show the first instruction as a preview */}
            <Link to={`/recipes/${category}/${recipe.id}`}>Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
