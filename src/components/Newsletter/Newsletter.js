import React from "react";
import newsImage from "../images/image-removebg-preview (72).png";
import { NewsletterText } from "./NewsletterText";

export const Newsletter = () => {
  return (
    <div className="w-full flex justify-center my-16">
      <div className="w-3/6 h-96 bg-blackTxt rounded-xl flex justify-start items-center gap-4 relative p-8">
        <NewsletterText />
        <img src={newsImage} className="absolute -right-40 -bottom-8" />
      </div>
    </div>
  );
};
