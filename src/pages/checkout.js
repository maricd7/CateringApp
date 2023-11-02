import React from "react";
import { FoodContextProvider, useFoodContext } from "../contexts";
import "../App.css";
import {
  CheckoutHeader,
  CheckoutMain,
  PaymentMethod,
} from "../components/Checkout";
import { CheckoutCartInfo } from "../components/Checkout/CheckoutCartInfo";
import { Icon } from "@iconify/react";
import { CtaButton } from "../components/common";
export const Checkout = () => {
  const { cart } = useFoodContext();

  return (
    <div className="m-8 w-full ">
      <CheckoutHeader />
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 mb-8">
            <PaymentMethod />
            <CheckoutMain />
          </div>
          <div>
            <CheckoutCartInfo />
            <CtaButton text="Finish Order" />
          </div>
        </div>
      </div>
    </div>
  );
};
