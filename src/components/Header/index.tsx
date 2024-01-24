import React from "react";
import "./header.scss";
import headerLogo from "../../assets/headerLogo.svg";
import NavigationList from "./NavigationList";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={headerLogo} alt="logo" />
      </div>
      <NavigationList />
    </nav>
  );
};

export default Header;
