import recipes from "../recipes.json";
import "../../public/css/Recipe.css";

function Cut() {
  const cutRecipes = recipes.cut;

  return (
    <div className="container">
      <div className="categ">
        <h1 className="title">Cutting Recipes</h1>
        {/* rendering list with recipes */}
        <ul className="rList">
          {cutRecipes.map((recipe) => (
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cut;
