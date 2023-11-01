import React from "react";
import { FoodContextProvider, useFoodContext } from "../contexts";
import "../App.css";
import { CheckoutMain } from "../components/Checkout";
import { CheckoutCartInfo } from "../components/Checkout/CheckoutCartInfo";
import { Icon } from "@iconify/react";
import { CtaButton } from "../components/common";
export const Checkout = () => {
  const { cart } = useFoodContext();

  return (
    <div className="m-8 ">
      <a href="/">
        <Icon
          icon="material-symbols:arrow-left"
          width={32}
          height={32}
          className="cursor-pointer "
        />
      </a>
      <div className="flex flex-col gap-8 mb-8">
        <CheckoutMain />
        <CheckoutCartInfo />
      </div>
      <CtaButton text="Finish Order" />
    </div>
  );
};
