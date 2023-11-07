import React from "react";
import { Radio } from "../common";

export const PaymentMethod = ({ checkPayment }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-blackTxt">Payment Method</h2>
      <div className="flex justify-between gap-4">
        <Radio
          onChange={() => checkPayment('cash')}
          text="Cash"
          icon="material-symbols:attach-money"
        />
        <Radio
          onChange={() => checkPayment('card')}
          text="Card"
          icon="material-symbols:credit-card-outline"
        />
      </div>
    </div>
  );
};
