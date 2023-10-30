import React from "react";
import FoodContainer from "./FoodContainer";

function Foods() {
  return (
    <div id="foods" className="px-24 mt-24 p-8">
      <span className="text-gray-400 font-bold text-xl">FOODS</span>
      <h1 className="text-6xl font-bold text-blackTxt">
        <span className="text-primCol">Select food</span> from our menu
      </h1>
      <div>
        <FoodContainer />
      </div>
    </div>
  );
}

export default Foods;
