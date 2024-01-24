import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationList = () => {
  return (
    <div className="nav-group">
      <NavLink to="/" className="nav-item">
        Dashboard
      </NavLink>
      <NavLink to="/" className="nav-item">
        Faq
      </NavLink>
      <NavLink to="/" className="nav-item">
        Support
      </NavLink>
    </div>
  );
};

export default NavigationList;
