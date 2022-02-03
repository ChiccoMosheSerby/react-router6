import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import SiteTitle from "../SiteTitle";
import { StyledNav } from "./Nav.style";
import { useGoingUp } from "./useGoingUp";
const Nav = () => {
  const themeContext = useThemeContext();
  const goingUp = useGoingUp();

  const navLinkClassName = (navData) => {
    return navData.isActive ? "navLink Active" : "navLink";
  };
  return (
    <StyledNav bg={themeContext.styles.background} show={goingUp}>
      <div className="navContent">
        <SiteTitle test=" test 1" />
        <button
          onClick={() => {
            themeContext.setIsLightTheme(!themeContext.isLightTheme);
          }}
        >
          Change Theme
        </button>
        <NavLink className={(navData) => navLinkClassName(navData)} to="/">
          Home
        </NavLink>
        <NavLink className={(navData) => navLinkClassName(navData)} to="/about">
          About
        </NavLink>
        <NavLink
          className={(navData) => navLinkClassName(navData)}
          to="/products"
        >
          Products
        </NavLink>
      </div>
    </StyledNav>
  );
};

export default Nav;
