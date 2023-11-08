import React from "react";
import { InputNL } from "../common";
export const NewsletterText = () => {
  return (
    <div className="newletter-text flex-col flex gap-4 w-4/6">
      <h1 className="text-white text-4xl  font-bold">
        Get special <span className="text-primCol">discounts</span>
      </h1>
      <p className="font-normal text-xl text-white">
        Input your email adress and subscrbie to our newsletter to get special
        offers.
      </p>
      <InputNL />
    </div>
  );
};
