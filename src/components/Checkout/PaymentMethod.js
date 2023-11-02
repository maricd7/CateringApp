import React from "react";
import { Radio } from "../common";

export const PaymentMethod = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blackTxt">Payment Method</h2>
      <div className="flex gap-8">
        <Radio text="Cash" icon="material-symbols:attach-money" />
        <Radio text="Card" icon="material-symbols:credit-card-outline" />
      </div>
    </div>
  );
};
