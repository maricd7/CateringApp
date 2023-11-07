import React, { useEffect, useState } from "react";
import AddToBag from "../Buttons/AddToBag";
import { useFoodContext } from "../../contexts";
import { CartModal, Secondary } from "../common";

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
      <ul className="flex flex-wrap gap-16 justify-between relative">
        {modal && <CartModal text="Added To Cart" btnText="OrderNow" href='/checkout'/>}
        {foods.map((meal, index) => (
          <li key={index}>
            <div className="max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200 hover:scale-110">
              {meal.discount > 0 && (
                <span className="text-white bg-red-600 py-2 px-6 rounded-lg absolute right-0 top-0">
                  {meal.discount}%
                </span>
              )}
              <img
                className="rounded-lg w-80 h-72"
                src={meal.image}
                alt={meal.name}
              />
              <h2 className="text-blackTxt">{meal.name}</h2>
              <p className="text-gray-400 h-24">{meal.description}</p>
              <div className="flex gap-4 items-center">
                <h4 className="text-blackTxt font-bold text-3xl">
                  $
                  {(meal.price - (meal.price * meal.discount) / 100).toFixed(2)}
                </h4>
                {meal.discount > 0 && (
                  <h4 className="text-gray-500 line-through text-2xl">
                    ${meal.price}
                  </h4>
                )}
              </div>
              <Secondary
                color='#D94D03'
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
