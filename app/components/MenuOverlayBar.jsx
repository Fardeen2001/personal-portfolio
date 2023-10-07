import React from "react";
import NavList from "./NavList";

const MenuOverlayBar = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavList href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlayBar;
