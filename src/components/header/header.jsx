import React from "react";
import bg from "../../imgs/bewdog.webp";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img className="header-img" src={bg} alt="Brewdog Beers" />
    </header>
  );
};

export default Header;
