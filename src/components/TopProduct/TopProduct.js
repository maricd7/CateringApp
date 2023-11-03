import React, { useEffect, useState } from "react";
import { CartModal, CtaButton, Secondary } from "../common";
import { useFoodContext } from "../../contexts";

export const TopProduct = () => {
  const [modal, setModal] = useState(false);
  const { foods, addToCart, getTopProduct } = useFoodContext();
  const [myTopProduct, setMyTopProduct] = useState();
  const addProductItemToContext = (id) => () => {
    addToCart(id);
    modalSetter();
  };

  useEffect(() => {
    setMyTopProduct(getTopProduct());
  }, []);

  function modalSetter() {
    setModal(true);
    setTimeout(() => {
      setModal(false);
    }, 3000);
  }
 setTimeout(()=>{
console.log(myTopProduct)

 },3000)
  return (
    <div className="top-product-bg w-3/4 h-96 bg-gray-400 mx-auto my-24 relative px-16  rounded-full flex items-center ">
      {modal && <CartModal text="Added To Cart" btnText="OrderNow" />}
      <div className="flex flex-col gap-4 mb-4 justify-center z-10">
        <h2 className="text-white text-6xl font-semibold">Today's top meal.</h2>
        <p className="text-white text-xl">
          Check out todays top meal with top discount.
        </p>
        <div>
          <div>
            <CtaButton
              onClick={addProductItemToContext()}
              text="Order Top Product"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
