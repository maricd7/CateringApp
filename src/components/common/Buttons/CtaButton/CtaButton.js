import React from "react";
import { Icon } from "@iconify/react";

export const CtaButton = ({ text, iconName, onClick,  }) => {
  return (
    <button
      className="bg-gradient-to-r from-ctaGradStart to-ctaGradEnd px-4 py-2 text-white rounded-full flex hover:shadow-lg"
      onClick={onClick}
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
