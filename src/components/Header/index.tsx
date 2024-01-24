import React from "react";
import "./header.scss";
import headerLogo from "../../assets/headerLogo.svg";
import NavigationList from "./NavigationList";
import ProfileInfo from "./ProfileInfo";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={headerLogo} alt="logo" />
      </div>
      <div className="right-group">
        <NavigationList />
        <ProfileInfo />
      </div>
    </nav>
  );
};

export default Header;
