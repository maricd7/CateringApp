import React from "react";

export const TopProductPrice = ({ price, discount }) => {
  return (
    <div className="flex gap-4 items-center	">
      <p className="text-blackTxt font-bold text-2xl">
        ${(price - (price * discount) / 100).toFixed(2)}
      </p>
      <p className="text-gray-700 font-normal  text-2xl line-through">
        ${price}
      </p>
    </div>
  );
};
