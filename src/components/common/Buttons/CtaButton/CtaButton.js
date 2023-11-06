import React from "react";
import { Icon } from "@iconify/react";

export const CtaButton = ({ text, iconName, onClick, onSubmit, type }) => {
  return (
    <button
      className="bg-gradient-to-r from-ctaGradStart to-ctaGradEnd px-4 py-2 text-white rounded-full flex items-center gap-2 hover:shadow-lg bg-gradient-to-r from-ctaGradEnd to-ctaGradStart"
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
      <Icon
        // Icon name example: material-symbols:arrow-forward
        icon={iconName}
        color="#fefefe"
        width="24"
        height="24"
      />
    </button>
  );
};
