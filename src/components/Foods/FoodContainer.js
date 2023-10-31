import React, { useEffect, useState } from "react";
import AddToBag from "../Buttons/AddToBag";
import { useFoodContext } from "../../contexts";
import { CartModal } from "../common";

function FoodContainer() {
  const [modal, setModal] = useState(false);
  const[existsModal, setExsitsModal]= useState(false)
  const { foods, addToCart} = useFoodContext();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
    modalSetter();
  };

  function modalSetter() {
      setModal(true);
      setTimeout(()=>{
        setModal(false)
      },3000)}
    
 
  if (!foods) return <div>Loading...</div>;

  return (
    <div className="mt-8">
      <ul className="flex flex-wrap gap-16 justify-between relative">
        {modal && <CartModal text='Added To Cart' btnText='OrderNow'/>}
        {foods.map((meal, index) => (
          <li key={index}>
            <div className="max-w-1/2 rounded-lg relative bg-white p-4 shadow-lg flex flex-col gap-4 border border-zinc-200 hover:scale-110">
              <img className="rounded-lg" src={meal.strMealThumb} alt={meal.strMeal} />
              <h2 className="text-blackTxt">{meal.strMeal}</h2>
              <h2 className="text-blackTxt font-bold">$20</h2>
              <AddToBag onClick={addProductItemToContext(meal.idMeal)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodContainer;
