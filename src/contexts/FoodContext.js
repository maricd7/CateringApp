import { createContext, useState, useEffect, useContext } from "react";
import { fetchRandomFood } from "../api";
import { cateringMeals } from "../data/Data";
const FoodContext = createContext({
  foods: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: () => [],
  saveCart: () => [],
});

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(null);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const fetchAllRandomMeals = async () => {
  //     const mealPromises = [];

  //     for (let i = 0; i < 8; i++) {
  //       mealPromises.push(fetchRandomFood());
  //     }
  //     const mealData = await Promise.all(mealPromises);

  //     setFoods(mealData);
  //   };

  //   fetchAllRandomMeals();
  // }, []);
  useEffect(() => {
    setFoods(cateringMeals);
  }, []);

  const addToCart = (id) => {
    console.log(cateringMeals);
    const foundFood = foods.find((food) => food.id === id);
    setCart([...cart, foundFood]);
  };

  const removeFromCart = (id) => {
    if (cart.length < 1) {
    }
    const newFoods = cart.filter((food) => food.id !== id);
    setCart([...newFoods]);
  };
  const saveCart = (cart) => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  };
  const contextValue = {
    foods,
    cart,
    addToCart,
    removeFromCart,
    saveCart,
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
