import React from "react";
import { NavbarItem } from "./NavbarItem";
import { Logo } from "../Logo";
import { CtaButton } from "../Buttons";

export const Navbar = ({ items }) => {
  const onCtaButtonClick = () => {
    console.log("Navbar on click");
    window.location.hash = "foods";
  };

  return (
    <div className="mt-6 mx-24 flex justify-between items-center">
      <Logo />
      <ul className="flex justify-between items-center w-96">
        {items.map(({ id, name, url }) => (
          <NavbarItem key={id} name={name} url={url} />
        ))}
        <CtaButton
          text="Order now"
          iconName="material-symbols:arrow-forward"
          onClick={onCtaButtonClick}
        />
      </ul>
    </div>
  );
};