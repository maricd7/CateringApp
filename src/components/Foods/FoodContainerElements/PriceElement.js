import React from "react";

export const PriceElement = ({ price, discount }) => {
  return (
    <div className="flex gap-4 items-center">
      <h4 className="text-blackTxt font-bold text-3xl">
        ${(price - (price * discount) / 100).toFixed(2)}
      </h4>
      {discount > 0 && (
        <h4 className="text-gray-500 line-through text-2xl">${price}</h4>
      )}
    </div>
  );
};
