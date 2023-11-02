import React from "react";
import { Icon } from "@iconify/react";
import "../../../../../src/App.css";
export const Secondary = ({ text, iconName, onClick }) => {
  return (
    <button
      className="border-2 border-primCol px-4 py-2 text-primCol justify-center rounded-full flex items-center gap-2 "
      onClick={onClick}
    >
      {text}
      <Icon icon={iconName} color="#D94D03" width="24" height="24" />
    </button>
  );
};
