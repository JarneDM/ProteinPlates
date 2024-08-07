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
              <p className='ingName'>Ingredients:</p>
              <ol className='ingList'>
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li className='ingredient' key={index}>{ingredient}</li>
              ))}
              </ol>
              <p className='iTitle'>Instructions:</p>
              <ol className='iList'>
                {recipe.instructions && recipe.instructions.map((step, index) => (
                  <li className='instructions' key={index}>{step}</li>
                ))}
              </ol>
              <p className='time'>Time: {recipe.totalTime}</p>
              
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bulk;
