import React, { useEffect, useState } from "react";
import AddToBag from "../Buttons/AddToBag";
import { useFoodContext } from "../../contexts";
import { CartModal, Filter, Secondary } from "../common";
import { Filters } from "./Filters";
import { BoxText, DiscountTag, MealThumb,PriceElement } from "./FoodContainerElements";
function FoodContainer() {
  const [modal, setModal] = useState(false);
  const { foods, addToCart } = useFoodContext();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
    modalSetter();
  };

  function modalSetter() {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 3000);
  }
  function calculateDiscountPrice(discount) {
    return discount > 0 ? discount : 0;
  }
  // New Price = Original Price - (Original Price * (Discount Percentage / 100))
  if (!foods) return <div>Loading...</div>;
  return (
    <div className="mt-8">
      <Filters />
      <ul className="flex flex-wrap gap-16 justify-between relative">
        {modal && (
          <CartModal text="Added To Cart" btnText="OrderNow" href="/checkout" />
        )}
        {foods.map((meal, index) => (
          <li key={index}>
            <div className="max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200 hover:scale-110">
              {meal.discount > 0 && (
               <DiscountTag discount={meal.discount}/>
              )}
              <MealThumb image={meal.image} alt={meal.name} />
              <BoxText name={meal.name} description={meal.description} />
              <PriceElement price={meal.price} discount={meal.discount}/>
              <Secondary
                color="#D94D03"
                text="Add to Bag"
                iconName="material-symbols:fastfood-outline"
                onClick={addProductItemToContext(meal.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodContainer;
