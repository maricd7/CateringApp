import React from "react";
import AddToBag from "../Buttons/AddToBag";
import { useFoodContext } from "../../contexts";

function FoodContainer() {
  const { foods, addToCart } = useFoodContext();

  const addProductItemToContext = (id) => () => {
    addToCart(id);
  };

  if (!foods) return <div>Loading...</div>;

  return (
    <div className="mt-8">
      <ul className="flex flex-wrap gap-8 justify-between">
        {foods.map((meal, index) => (
          <li key={index}>
            <div className="max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200 hover:scale-110">
              <img
                className="rounded-lg"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <h2 className="text-blackTxt">{meal.strMeal}</h2>
              <AddToBag onClick={addProductItemToContext(meal.idMeal)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodContainer;
