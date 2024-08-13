import React from 'react';
// import RecipeList from './RecipeList'; // Adjust the path as per your project structure
import recipes from "../recipes.json";
import "./Recipe.css"

const Bulk = () => {
  // Extracting recipes from the 'bulk' category
  const bulkRecipes = recipes.bulk;

  return (
    <div className="container">
      <div className='categ'>
      <h1 className='title'>Bulking Recipes</h1>
        <ul className='rList'>
          {bulkRecipes.map(recipe => (
            <li className='recipe' key={recipe.id}>
              <h3 className='rName'>{recipe.name}</h3>
              
              {/* Optionally display nutrition info */}
              {recipe.nutrition && (
                <div className='dNutr'>
                  <p className='nTitle'>Nutrition:</p>
                  <ol className='nList'>
                    <li className='nutrition'>Calories: {recipe.nutrition.calories}</li>
                    <li className='nutrition'>Protein: {recipe.nutrition.protein}</li>
                    <li className='nutrition'>Carbs: {recipe.nutrition.carbs}</li>
                    <li className='nutrition'>Fat: {recipe.nutrition.fat}</li>
                  </ol>
                </div>
              )}
              <p className='time'>Time: {recipe.totalTime}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bulk;
