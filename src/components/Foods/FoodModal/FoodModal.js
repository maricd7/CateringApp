import React from "react";
import { MealThumbBoxText,
    DiscountTag,
    MealThumb,
    PriceElement,BoxText } from "../FoodContainerElements";
import { Secondary } from "../../common";
import { useFoodContext } from "../../../contexts";

export const FoodModal = ({ Food }) => {
    const { foods, addToCart } = useFoodContext();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
  };
  console.log(Food);
  return (
    <div className="rounded-lg z-50 p-8 bg-white shadow-lg fixed top-1/2 left-1/2 -translate-y-1/2   transform -translate-x-1/2">
      <MealThumb image={Food.image} alt={Food.name} />
      <BoxText name={Food.name} description={Food.description} />
      <PriceElement price={Food.price} discount={Food.discount} />
      <Secondary
        color="#D94D03"
        text="Add to Bag"
        iconName="material-symbols:fastfood-outline"
        onClick={addProductItemToContext(Food.id)}
      />
    </div>
  );
};
