import React, { useEffect } from "react";

import { useState } from "react";
export const CheckoutCartInfo = () => {
  const [checkoutCart, setCheckoutCart] = useState([]);
  const[total,setTotal] = useState(0); 
  let prices =[]
  let sum = 0;
  useEffect(() => {
    setCheckoutCart(JSON.parse(localStorage.getItem("myCart")));
  }, []);
  useEffect(()=>{
    checkoutCart.forEach(item=>{
      let price= (item.price - (item.price * item.discount) / 100).toFixed(2)*item.quantity
      prices.push(price);
    })
   
    for (let i = 0; i < prices.length; i++ ) {
      sum += prices[i];
    }
    
    setTotal(sum)
  },[checkoutCart])

  console.log(prices)
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-blackTxt mb-4">Order Info</h2>
      {checkoutCart.map((item, index) => (
        <div key={index}>
          {item.name} x {item.quantity} $  {(item.price - (item.price * item.discount) / 100).toFixed(2)}
        </div>
      ))}
      <div className="flex w-full items-center justify-between  mt-4"><h3 className="font-bold">Total</h3><h3 className="font-bold">${total.toFixed(2)}</h3></div>
    </div>
  );
};
