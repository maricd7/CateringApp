import React from "react";
import { Icon } from "@iconify/react";
import { CtaButton } from "../../Buttons";

export const CartModal = ({text, btnText}) => {
  return (
    <div className="rounded-lg z-50 p-8 bg-white shadow-lg fixed top-1/2 left-1/2 -translate-y-1/2   transform -translate-x-1/2">
      <div className="gap-4 text-center flex flex-col items-center justify-center">
        <Icon  icon="fluent-emoji:face-savoring-food" width="128" height="128" />
        <h2>{text}</h2>
        <p className="text-sm text-gray-500"></p>
        <CtaButton text={btnText} />
      </div>
    </div>
  );
};
