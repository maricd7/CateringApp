import React from "react";
import { Icon } from "@iconify/react";
export const Filter = ({ onClick, text, icon }) => {
  return (
    <button
      className="flex gap-4 items-center justify-center border-2 px-4 py-2 border-primCol rounded-full cursor-pointer"
      onClick={onClick}
    >
      <Icon icon={icon} width={24} height={24}/>
      {text}
    </button>
  );
};
