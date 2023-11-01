import React, { useEffect } from "react";

import { useState } from "react";
export const CheckoutCartInfo = () => {
  const [checkoutCart, setCheckoutCart] = useState([]);

 useEffect(()=>{
  setCheckoutCart(JSON.parse(localStorage.getItem("myCart")));
 }, []); 


 return(
  <div>
    {checkoutCart.map((item)=>(
      <div>{item.strMeal}</div>
    ))}
  </div>
)}
