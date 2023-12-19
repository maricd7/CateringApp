import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavbarItem } from "../NavbarItem";

export const Burger = ({ items, icon, onClick }) => {
  const [burgerMenu, toggleBurger] = useState(false);
  const openMenu = () => {
    console.log('heheheh')
    toggleBurger(true);
  };
  const closeMenu = ()=>{
    toggleBurger(false)
  }

  return (
    <div className="overflow-hidden relative burger">
      <Icon onClick={() => openMenu()} icon={icon} />
      {burgerMenu && (
      <ul className="fixed top-0 left-0 w-full h-full z-50  bg-white flex flex-col overflow-hidden 	 gap-8 justify-center items-center w-96">
        <Icon onClick={()=>{closeMenu()}} icon='material-symbols:close' className="absolute right-16 top-16"/>
        {items.map(({ id, name, url }) => (
          <NavbarItem key={id} name={name} url={url} />
        ))}
      </ul>)}
    </div>
  );
};

