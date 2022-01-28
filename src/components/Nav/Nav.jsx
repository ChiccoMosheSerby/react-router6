import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import SiteTitle from "../SiteTitle";
import { StyledNav } from "./Nav.style";
const Nav = () => {
  const themeContext = useThemeContext();

  const navLinkClassName = (navData) => {
    return navData.isActive ? "navLink Active" : "navLink";
  };
  return (
    <StyledNav style={{ background: themeContext.styles.background }}>
      <SiteTitle test="test 1" />
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
    </StyledNav>
  );
};

export default Nav;
