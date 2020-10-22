import React from "react";
import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <NavbarItem>
          Home
        </NavbarItem>
        <NavbarItem>
          Conferences
        </NavbarItem>
        <NavbarItem>
          Membership
        </NavbarItem>
        <NavbarItem>
          Publications
        </NavbarItem>
        <NavbarItem>
          Review Process
        </NavbarItem>
        <NavbarItem>
          FAQs
        </NavbarItem>
      </ul>

      <button className="btn btn-warning my-2 my-sm-0 mr-sm-2" type="submit">
        Register
      </button>
      <button className="btn btn-warning my-2 my-sm-0" type="submit">
        Login
      </button>
    </nav>
  );
};
