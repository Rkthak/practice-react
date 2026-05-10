import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-300">
      <ul className="flex justify-end">
        <li className="ml-6 hover:bg-white py-3.5 px-1.5">
          <NavLink href="/" className=" font-semibold">
            Home
          </NavLink>
        </li>
        <li className="ml-6 hover:bg-white py-3.5 px-1.5">
          <NavLink to={"/register"} className=" font-semibold">
            Register
          </NavLink>
        </li>
        <li className="ml-6 hover:bg-white py-3.5 px-1.5">
          <NavLink to={"/login"} className=" font-semibold">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
