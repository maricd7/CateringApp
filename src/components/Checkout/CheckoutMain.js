import React, { useState } from "react";
import { Input, Textarea } from "../common";
import { PaymentMethod } from "./PaymentMethod";
export const CheckoutMain = () => {
  const [cash, setCash] = useState(null); 
  const [card,setCard] = useState(false); 

  const checkPayment = (cash, card)=>{
    if(cash){
      setCash(true);
      setCard(false);
    }else{
      setCard(true)
    }
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-blackTxt mb-4">Your Info</h2>
      <PaymentMethod checkPayment={checkPayment}/>
      <Input text="Name" />
      <Input text="Your Number" />
      {card && (<div className="flex gap-4"><Input text='Card Number'/> <Input text='CVC'/></div>)}
      <Input text="Address" />
      <Textarea text="Your Message" />
    </div>
  );
};
