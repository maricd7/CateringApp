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
  setTimeout(() => {
    console.log(myTopProduct, 'moj produkt')

  }, 3000)
  return (
    <div className="top-product-bg w-3/4 h-96 bg-gray-400 mx-auto my-24 relative px-48  rounded-full flex items-center justify-between ">
      {modal && <CartModal text="Added To Cart" btnText="OrderNow" />}
      <div className="flex flex-col gap-4 mb-4 justify-center z-10">
        <h2 className="text-white text-6xl font-semibold">Today's top meal.</h2>
        <p className="text-white text-xl">
          Check out todays top meal with top discount.
        </p>
        <div>
          <div>
            {myTopProduct && (<CtaButton
              onClick={addProductItemToContext(myTopProduct.id)}
              text="Order Top Product"
            />)}
          </div>
        </div>
      </div>
      <div>
        {myTopProduct && (
          <div className="bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md bg-white bg-clip-padding">
            {myTopProduct.discount > 0 && (
                <span className="text-white bg-red-600 py-2 px-6 rounded-lg absolute right-0 top-0">
                  {myTopProduct.discount}%
                </span>
              )}
            <img
              src={myTopProduct.image}
              alt={myTopProduct.name}
              className="w-48 h-48 object-cover mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{myTopProduct.name}</h3>
            <div className="flex gap-4 items-center	">
              <p className="text-blackTxt font-bold text-2xl">
                $
                {(myTopProduct.price - (myTopProduct.price * myTopProduct.discount) / 100).toFixed(2)}
              </p>
              <p className="text-gray-700 font-normal  text-2xl line-through">
                $
                {myTopProduct.price}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
