import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import BeerInfo from "./components/BeerInfo/BeerInfo";
import HomeMain from "./components/HomeMain/HomeMain";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=30")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain beersList={data} />}></Route>
      </Routes>
      <Routes>
        <Route path="/info/:id" element={<BeerInfo beersList={data} />}></Route>
      </Routes>
    </>
  );
}

export default App;

//
