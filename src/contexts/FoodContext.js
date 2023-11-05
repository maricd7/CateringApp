import { createContext, useState, useEffect, useContext } from "react";
import { fetchRandomFood } from "../api";
import { cateringMeals } from "../data/Data";
const FoodContext = createContext({
  foods: null,
  cart: null,
  addToCart: () => [],
  removeFromCart: () => [],
  saveCart: () => [],
  getTopProduct:null,
});

export const FoodContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(cateringMeals);
  const [cart, setCart] = useState([]);
  const [topProduct, setTopProduct] = useState(null);

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

  const getTopProduct = () => {
    function compareNumbers(a, b) {
      return a - b;
    }
    const discounts = [];
    foods.forEach((food) => {
      discounts.push(food.discount);
    });
    discounts.sort(compareNumbers)
    let lastIndex = discounts.length - 1;
    const discountedProduct = foods.filter(
      (meal) => meal.discount === discounts[lastIndex]
    );
    setTopProduct(discountedProduct[0]);
    return discountedProduct[0];
  };

  const contextValue = {
    foods,
    cart,
    addToCart,
    removeFromCart,
    saveCart,
    topProduct,
    getTopProduct,
    setTopProduct,
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
