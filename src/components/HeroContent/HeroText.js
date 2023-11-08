import React from "react";
import { CtaButton,Heading } from "../common";

export const HeroText = () => {

  return (
    <div className="hero-text h-full mt-32 mr-4">
      <Heading text={[" Welcome to ", <span className="text-primCol">CaterEase: </span>,  "Where Every Bite is an Experience"]}/>
      <p className="text-2xl mt-6 mb-6 text-blackTxt">
        At CaterEase, we're more than just a catering app – we're your passport
        to a world of exquisite flavors, culinary talent, and unforgettable
        experiences.{" "}
      </p>
      <a href="#foods"><CtaButton
        iconName="material-symbols:fastfood-outline"
        text="Order food"
      /></a>
    </div>
  );
};
