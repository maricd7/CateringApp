import React from "react";

export const Textarea = ({ text }) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {text}
      </label>
      <textarea className="w-full h-48  px-3 py-2 border rounded-lg border-gray-400 focus:outline-none focus:border-blue-500" placeholder="Enter your message."></textarea>
    </div>
  );
};
