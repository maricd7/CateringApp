import React from "react";

export const Input = ({ text, name, ref }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {text}
      </label>
      <input
        className="block w-full px-3 py-2 border rounded-full border-gray-400 focus:outline-none focus:border-blue-500"
        placeholder={text}
        name={name}
        ref={ref}
      />
    </div>
  );
};
