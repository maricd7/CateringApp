import React from "react";

export const NavbarItem = ({ name, url }) => {
  return (
    <a href={url}>
      <li>{name}</li>
    </a>
  );
};
