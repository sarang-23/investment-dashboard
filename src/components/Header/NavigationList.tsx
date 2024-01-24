import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationList = () => {
  return (
    <div className="nav-group">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Faq</NavLink>
      <NavLink to="/">Support</NavLink>
    </div>
  );
};

export default NavigationList;
