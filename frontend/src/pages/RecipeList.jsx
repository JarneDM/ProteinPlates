import React, { useEffect, useState } from 'react';

const RecipeList = ({ category }) => {
  const [recipes, setRecipes] = useState([]);

  {/* i don't even know why i wrote this because i'm not using it atm???? */}
  useEffect(() => {
    fetch(`http://localhost:5000/api/recipes/${category}`)
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.instructions}</p>
            <p>Time: {recipe.time}</p>
            <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            {recipe.picture && <img src={recipe.picture} alt={recipe.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
