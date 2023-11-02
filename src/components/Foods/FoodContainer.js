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
              <img className="rounded-lg w-80 h-72" src={meal.image} alt={meal.name} />
              <h2 className="text-blackTxt">{meal.name}</h2>
              <p className="text-gray-400 h-24">{meal.description}</p>
              <h2 className="text-blackTxt font-bold">${meal.price}</h2>
              <AddToBag onClick={addProductItemToContext(meal.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodContainer;
