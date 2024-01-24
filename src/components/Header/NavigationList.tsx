import React from "react";
import { Link } from "react-router-dom";

const NavigationList = () => {
  return (
    <div className="nav-group">
      <Link to="/">Dashboard</Link>
      <Link to="/">Faq</Link>
      <Link to="/">Support</Link>
    </div>
  );
};

export default NavigationList;
