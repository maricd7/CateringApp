import React from "react";
import { TopProductDiscount } from "./TopProductDiscount";
import { TopProductImg } from "./TopProductImg";
import { TopProductName } from "./TopProductName";
import { TopProductPrice } from "./TopProductPrice";

export const TopProductBox = ({ myTopProduct }) => {
  return (
    <div>
      {myTopProduct && (
        <div className="bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md bg-white bg-clip-padding">
          <TopProductDiscount discount={myTopProduct.discount} />
          <TopProductImg myTopProduct={myTopProduct} />
          <TopProductName topName={myTopProduct.name} />
          <TopProductPrice
            price={myTopProduct.price}
            discount={myTopProduct.discount}
          />
        </div>
      )}
    </div>
  );
};
