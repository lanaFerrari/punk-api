import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
  const { filterByPh, filterByRange, filterByAbv, userInput, handleInput } =
    props;

  return (
    <nav className="navbar">
      <div className="navbar__textInput">
        <input
          type="text"
          id="input"
          name="input"
          value={userInput}
          placeholder="Search for a beer here.."
          onChange={handleInput}
        />
      </div>
      <section className="navbar__section">
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
          <label htmlFor="ph">{`Acidic (ph < 4)`}</label>
          <input onClick={filterByPh} type="checkbox" id="ph" name="ph" />
        </div>
        <div className="navbar__check-input-abv">
          <label htmlFor="abv">{`High ABV`}</label>
          <input onClick={filterByAbv} type="checkbox" id="abv" name="abv" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
