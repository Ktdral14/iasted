import React from "react";

export const NavbarItem = (props: any) => {
  return (
    <li className="nav-item active">
      <a className="nav-link" href="#">
        {props.children}
      </a>
    </li>
  );
};
