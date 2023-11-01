import React from "react";
import { FoodContextProvider, useFoodContext } from "../contexts";
import "../App.css";
import { CheckoutMain } from "../components/Checkout";
import { CheckoutCartInfo } from "../components/Checkout/CheckoutCartInfo";

export const Checkout = () => {
  const { cart } = useFoodContext();


  return (
    <div className="App">
      <CheckoutMain />
      <CheckoutCartInfo />
    </div>
  );
};
