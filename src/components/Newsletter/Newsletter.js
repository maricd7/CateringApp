import React from "react";
import newsImage from "../images/image-removebg-preview (72).png";
import { Input } from "../common";
import { CtaButton } from "../common";
export const Newsletter = () => {
  return (
    <div className="w-full flex justify-center my-16">
      <div className="w-3/6 h-96 bg-blackTxt rounded-xl flex justify-start items-center gap-4 relative p-8">
        <div className="flex-col flex gap-4 w-4/6">
          <h1 className="text-white text-4xl  font-bold">
            Get special <span className="text-primCol">discounts</span>
          </h1>
          <p className="font-normal text-xl text-white">
            Input your email adress and subscrbie to our newsletter to get
            special offers.
          </p>
         <div className="flex flex-col gap-2">
         <label className="text-white">Email</label>
          <div className="flex w-full gap-2"><input type="email" placeholder="Enter your email." className="rounded-full p-4 w-full"></input> <CtaButton text='Subscribe' iconName='bx:paper-plane'/></div>
         </div>
        </div>

        <img src={newsImage} className="absolute -right-40 -bottom-8" />
      </div>
    </div>
  );
};
