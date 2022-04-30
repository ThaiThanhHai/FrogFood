import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MenuContainer = ({ link, icon, isHome }) => {
  return (
    <>
      <NavLink to={link} className="nav-link">
        <span className="icon">{icon}</span>
      </NavLink>
      <Outlet />
    </>
  );
};

export default MenuContainer;
