import React, { useState } from "react";
import FoodContainer from "./FoodContainer";
import { Heading } from "../common";
import { FoodModal } from "./FoodModal";

function Foods() {
  const [foodModalShow, setFoodModal] = useState(false)
  const [foodForModal, setFoodForModal] =useState(null)
  function showFoodInfo(food){
    setFoodModal(true)
    setFoodForModal(food);
      }
  return (
    <div id="foods" className="px-24 mt-24 p-8">
      <span className="text-gray-400 font-bold text-xl">FOODS</span>
      <Heading text={[<span className="text-primCol">Select food</span> , " from our menu"]}/>
      <div className="flex gap-4">
        <FoodContainer showFoodInfo={showFoodInfo}/>
        {foodModalShow &&  <FoodModal Food={foodForModal}/>}
      </div>
    </div>
  );
}

export default Foods;
