// eslint-disable-next-line no-unused-vars
import React from "react";

function AddRecipe() {
  return (
    <div className="container-ar">
      <div className="inputs">
        <div className="input-name">
          <input
            type="text"
            className="name"
            placeholder="Name of the recipe"
          />
        </div>
        <div className="input-ing">
          <input
            type="text"
            name="ingredient"
            id="ingredient"
            className="ingredient"
            placeholder="Ingredients..."
          />
        </div>
        <div className="input-instr">
          <input
            type="text"
            name="instructions"
            id="instructions"
            className="instructions"
            placeholder="Instructions..."
          />
        </div>
        <div className="input-nutr">
          <input className="nutr-inp" type="number" placeholder="Calories" />
          <input className="nutr-inp" type="number" placeholder="Fat" />
          <input className="nutr-inp" type="number" placeholder="Carbs" />
          <input className="nutr-inp" type="number" placeholder="Protein" />
        </div>
        <button type="submit" id="add-btn">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddRecipe;
