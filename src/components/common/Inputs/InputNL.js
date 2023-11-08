import React from "react";
import { CtaButton } from "../Buttons";
export const InputNL = () => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white">Email</label>
      <div className="input-nl flex w-full gap-2">
        <input
          type="email"
          placeholder="Enter your email."
          className="rounded-full p-4 w-full"
        ></input>{" "}
        <CtaButton text="Subscribe" iconName="bx:paper-plane" />
      </div>
    </div>
  );
};
