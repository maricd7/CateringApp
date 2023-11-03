import React from "react";
import FoodContainer from "./FoodContainer";
import { Heading } from "../common";

function Foods() {
  return (
    <div id="foods" className="px-24 mt-24 p-8">
      <span className="text-gray-400 font-bold text-xl">FOODS</span>
      <Heading text={[<span className="text-primCol">Select food</span> , " from our menu"]}/>
      <div className="flex gap-4">
        <FoodContainer />
      </div>
    </div>
  );
}

export default Foods;
