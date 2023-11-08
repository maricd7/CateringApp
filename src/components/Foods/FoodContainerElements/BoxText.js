import React from "react";

export const BoxText = ({name, description}) => {
  return (
    <div>
      <h2 className="text-blackTxt">{name}</h2>
      <p className="text-gray-400 h-24">{description}</p>
    </div>
  );
};
