import React from "react";
import Bag from "../Buttons/Bag";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useFoodContext } from "../../contexts";

export const Cart = () => {
  const { cart } = useFoodContext();
  const { foods, addToCart, removeFromCart } = useFoodContext();
  const [toggleCart, setToggleCart] = useState(false);

  const cartToggler = () => {
    setToggleCart(!toggleCart);
  };


  const removeFoodFromCart = (id)=> ()=>{
    removeFromCart(id);
    console.log(id)
  }
  return (
    <div>
      {toggleCart && (
        <div className="fixed top-0 right-0 w-1/4 h-full bg-white z-50 shadow-lg py-4 px-4 overflow-scroll">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <Icon
              icon="material-symbols:close"
              onClick={cartToggler}
              width={32}
              height={32}
              className="cursor-pointer "
            />
          </div>
          <div>
            <ul className="flex flex-wrap gap-8 justify-between">
              {cart.map((meal, index) => (
                <li key={index} className="mt-4">
                  <div className="flex justify-between items-center gap-4">
                    <img
                      className="rounded-lg max-w-1/4 "
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                    />
                    <h2 className=" text-blackTxt">{meal.strMeal}</h2>
                    <Icon
                      icon="material-symbols:delete-outline"
                      width={32}
                      height={32}
                      className="cursor-pointer"
                      onClick={removeFoodFromCart(meal.idMeal)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Bag toggleCart={cartToggler} />
    </div>
  );
};
