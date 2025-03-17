// import RecipeList from './RecipeList'; // Adjust the path as per your project structure
import recipes from "../recipes.json";
import "../../public/css/Recipe.css";

import { Link } from "react-router-dom";

const Bulk = () => {
  // Extracting recipes from the 'bulk' category
  const bulkRecipes = recipes.bulk;

  return (
    <div className="container">
      <div className="categ">
        <h1 className="title">Bulking Recipes</h1>
        {/* rendering list with recipes */}
        <ul className="rList">
          <div className="recipe-card">
            {bulkRecipes.map((recipe) => (
              <li className="recipe" key={recipe.id}>
                <h3 className="rName">{recipe.name}</h3>

                {/* optionally display nutrition info */}
                {recipe.nutrition && (
                  <div className="dNutr">
                    <p className="nTitle">Nutrition:</p>
                    <ol className="nList">
                      <li className="nutrition">Calories: {recipe.nutrition.calories}</li>
                      <li className="nutrition">Protein: {recipe.nutrition.protein}</li>
                      <li className="nutrition">Carbs: {recipe.nutrition.carbs}</li>
                      <li className="nutrition">Fat: {recipe.nutrition.fat}</li>
                    </ol>
                  </div>
                )}
                <p className="time">Time: {recipe.totalTime}</p>
                <Link to={"/pages/RecipePage"}>
                  <button className="goto-btn">View..</button>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Bulk;
