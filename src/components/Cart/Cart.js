import React from "react";
import Bag from "../Buttons/Bag";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useFoodContext } from "../../contexts";
import {CtaButton} from '../common'
export const Cart = () => {
  const { cart } = useFoodContext();
  const { foods, addToCart, removeFromCart } = useFoodContext();
  const [toggleCart, setToggleCart] = useState(false);
  const [quantity, setQuantity] = useState(1); 


  const cartToggler = () => {
    setToggleCart(!toggleCart);
  };
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const removeFoodFromCart = (id) => () => {
    removeFromCart(id);
    console.log(id);
  };
 
  return (
    <div>
      {toggleCart && (
        <div className="cart-animate fixed top-0 right-0  h-full bg-white z-50 shadow-lg py-4 px-4 overflow-scroll">
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
            <ul className="flex flex-wrap gap-8 justify-between mb-8">
            {(!cart.length) && <div className="mt-4">Your cart is empty.</div>}
              {cart.map((meal, index) => (
                <li key={index} className="mt-4">
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex gap-4 items-center">
                      <img
                        className="rounded-lg max-w-1/4 "
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                      />
                      <div className="flex-col gap-4">
                        <h2 className="text-blackTxt">{meal.strMeal}</h2>
                        <h2 className="text-blackTxt font-bold">${quantity*20}</h2>
                        <select
                          name="quantity"
                          id="quantity"
                          value={quantity}
                          onChange={(e) => handleQuantityChange(e.target.value)}
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                    </div>
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
            <a href="/checkout"><CtaButton text='Go to checkout'/></a>
          </div>
        </div>
      )}
      <Bag toggleCart={cartToggler} />
    </div>
  );
};
