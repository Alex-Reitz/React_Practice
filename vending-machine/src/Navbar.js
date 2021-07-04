import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/CandyBar">
        CandyBar
      </NavLink>
      <NavLink exact to="/FruitRollup">
        FruitRollup
      </NavLink>
      <NavLink exact to="/Soda">
        Soda
      </NavLink>
    </nav>
  );
}

export default NavBar;
