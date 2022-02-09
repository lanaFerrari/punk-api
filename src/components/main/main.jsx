import React, { useState, useEffect } from "react";
import Cardlist from "../../containers/cardlist";
import Navbar from "../navbar/navbar";
import "./mains.scss";

const Main = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const [abv, setAbv] = useState(false);
  const [range, setRange] = useState(false);
  const [ph, setPh] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=6")
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

  const filteredBeerList = data.filter((beer) => {
    console.log(beer);
    if (!abv && !ph && !range) {
      return data;
    } else if (abv) {
      return beer.abv > 6;
    } else if (ph) {
      return beer.ph < 4;
    } else if (range) {
      return beer.first_brewed.split("/")[1] >= 2010;
    }
  });

  return (
    <main className="main-container ">
      <Navbar
        filterByPh={filterByPh}
        filterByRange={filterByRange}
        filterByAbv={filterByAbv}
      />
      <Cardlist beersArray={filteredBeerList} />
    </main>
  );
};

export default Main;
