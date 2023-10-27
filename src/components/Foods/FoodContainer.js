import React, { useState, useEffect } from 'react';
import AddToBag from '../Buttons/AddToBag';
import { fetchAllRandomMeals } from '../../productsStore';

function FoodContainer() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    let dishes = JSON.parse(localStorage.getItem('meals'))
    console.log(meals, 'pogurano')
    setMeals(dishes)
  }, []);

  return (
    <div className='mt-8'>
      <ul className='flex flex-wrap gap-8 justify-between'>
        {meals.map((meal, index) => (
          <li key={index}>
            <div className='max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200 hover:scale-110'>
              <img className='rounded-lg' src={meal.strMealThumb} alt={meal.strMeal} />
              <h2 className='text-blackTxt'>{meal.strMeal}</h2>
              <AddToBag index={index} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodContainer;