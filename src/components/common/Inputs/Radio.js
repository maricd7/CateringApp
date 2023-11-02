import React from "react";
import { Icon } from "@iconify/react";
export const Radio = ({ text, icon }) => {
  return (
    <div className="flex gap-2 items-center mt-8">
      <div className="flex gap-1 items-center">
        <Icon icon={icon} width="48" height="48" />
        <label>{text}</label>
      </div>
      <input type="radio" name="method" />
    </div>
  );
};
