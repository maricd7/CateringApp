import { createContext, useState, useEffect, useContext } from "react";
import { fetchRandomFood } from "../api";

const FoodContext = createContext({
  foods: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: ()=>[]
});

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAllRandomMeals = async () => {
      const mealPromises = [];

      for (let i = 0; i < 8; i++) {
        mealPromises.push(fetchRandomFood());
      }
      const mealData = await Promise.all(mealPromises);

      setFoods(mealData);
    };

    fetchAllRandomMeals();
  }, []);

  const addToCart = (id) => {
    const foundFood = foods.filter((food) => food.idMeal === id);

    setCart([...cart ,...foundFood]);
  };

  const removeFromCart = (id)=>{
    const newFoods = cart.filter((food)=>food.idMeal !== id)
    // console.log(newFoods)
    setCart([...newFoods])
  }

  const contextValue = {
    foods,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const foodContext = useContext(FoodContext);

  if (!foodContext) {
    throw new Error("No foodContext.Provider found when calling userContext.");
  }

  return foodContext;
};
