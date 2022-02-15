import React, { useState, useEffect } from "react";
import CardList from "../../containers/CardList/CardList";
import Navbar from "../Navbar/Navbar";
import "./HomeMain.scss";

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
    let beerFound = true;

    if (userInput) {
      beerFound = beer.name.toLowerCase().includes(userInput);
    }

    if (abv) {
      beerFound = beerFound && beer.abv > 6;
    }

    if (ph) {
      beerFound = beerFound && beer.ph < 4;
    }

    if (range) {
      beerFound = beerFound && beer.first_brewed.split("/")[1] >= 2010;
    }

    return beerFound;
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
