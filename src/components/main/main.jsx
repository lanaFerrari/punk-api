import React, { useState, useEffect } from "react";
import Cardlist from "../../containers/cardlist";
import Navbar from "../navbar/navbar";
import "./mains.scss";

const Main = () => {
  const [data, setData] = useState([]);
  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=30")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

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

  const filteredBeerList = data.filter((beer) => {
    if (userInput) {
      return beer.name.toLowerCase().includes(userInput);
    }
    if (!abv && !ph && !range) {
      return data;
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
    <main className="main-container ">
      <Navbar
        filterByPh={filterByPh}
        filterByRange={filterByRange}
        filterByAbv={filterByAbv}
        userInput={userInput}
        handleInput={handleInput}
      />
      <Cardlist beersArray={filteredBeerList} />
    </main>
  );
};

export default Main;
