import React from 'react'
import { useState, useEffect } from 'react'
import AddToBag from '../Buttons/AddToBag';
function FoodContainer() {
    const [meals, setMeals] = useState([]);
    let mealsToCart = [];
    useEffect(() => {
      
        const fetchRandomMeal = async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        return data.meals[0]; 
      };
  
      const fetchAllRandomMeals = async () => {
        const mealPromises = [];
        for (let i = 0; i < 8; i++) {
          mealPromises.push(fetchRandomMeal());
        }
        const mealData = await Promise.all(mealPromises);
        setMeals(mealData);
        
      };
  
      fetchAllRandomMeals();
    }, []);

    function addToCart(index){
       
      mealsToCart.push(meals[index])
      localStorage.setItem('meals', JSON.stringify(mealsToCart))
      console.log(mealsToCart, 'mealsincart')

    }
  return (
    <div className='mt-8'>
       <ul className='flex flex-wrap gap-8 justify-between'>
        {meals.map((meal, index) => (
          <li key={index}>
            <div className='max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200	hover:scale-110	'>
              <img className='rounded-lg ' src={meal.strMealThumb} alt={meal.strMeal} />
              <h2 className=' text-blackTxt'>{meal.strMeal}</h2>
              <AddToBag addToCart ={addToCart} index={index}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FoodContainer
