import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
  const { filterByPh, filterByRange, filterByAbv } = props;

  return (
    <div className="navbar">
      <div className="navbar__textInput">
        <input type="text" id="input" name="input" placeholder="Search" />
      </div>

      <div className="navbar__check-input-abv">
        <label htmlFor="abv">{`HIGH ABV(> 6%)`}</label>
        <input onClick={filterByAbv} type="checkbox" id="abv" name="abv" />
      </div>
      <div className="navbar__check-input-range">
        <label htmlFor="range">{`Classic Range`}</label>
        <input
          onClick={filterByRange}
          type="checkbox"
          id="range"
          name="range"
        />
      </div>
      <div className="navbar__check-input-ph">
        <label htmlFor="ph">{`Acidic(pH < 4)`}</label>
        <input onClick={filterByPh} type="checkbox" id="ph" name="ph" />
      </div>
    </div>
  );
};

export default Navbar;
