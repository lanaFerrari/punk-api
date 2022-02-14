import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./HomeMain.scss";
import CardList from "../../containers/CardList/CardList";

const HomeMain = (props) => {
  const { beersList } = props;

  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [userInput, setUserInput] = useState("");

  const filterByPh = () => {
    setPh(!ph);
  };
  const filterByRange = () => {
    setRange(!range);
  };
  const filterByAbv = () => {
    setAbv(!abv);
  };
  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const filteredBeerList = beersList.filter((beer) => {
    if (userInput) {
      return beer.name.toLowerCase().includes(userInput);
    }
    if (!abv && !ph && !range) {
      return beersList;
    }
    if (abv) {
      return beer.abv > 6;
    }
    if (ph) {
      return beer.ph < 4;
    }
    if (range) {
      return beer.first_brewed.split("/")[1] >= 2010;
    }
  });

  return (
    <main className="main-container">
      <Navbar
        filterByPh={filterByPh}
        filterByRange={filterByRange}
        filterByAbv={filterByAbv}
        userInput={userInput}
        handleInput={handleInput}
      />
      <CardList beersArray={filteredBeerList} />
    </main>
  );
};

export default HomeMain;
