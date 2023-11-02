import React from "react";
import { Input } from "../common";
export const CheckoutMain = () => {
  return (
    <div >
       <h2 className="text-2xl font-bold text-blackTxt mb-4">Your Info</h2>
      <Input text="Name" />
      <Input text="Your Number" />
      <Input text="Address" />
      <Input text="Message" />
    </div>
  );
};
