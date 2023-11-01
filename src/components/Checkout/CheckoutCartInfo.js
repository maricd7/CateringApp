import React from "react";
import { useFoodContext } from "../../contexts";

export  const CheckoutCartInfo = () => {
  const { cart } = useFoodContext();

  console.log(cart, "cart in CheckoutCartInfo");
};


