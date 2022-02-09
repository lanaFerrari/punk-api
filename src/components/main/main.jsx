import React, { useState, useEffect } from "react";
import Cardlist from "../../containers/cardlist";
import "./mains.scss";

const Main = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=6")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <main>
      <Cardlist beersArray={data} />
    </main>
  );
};

export default Main;
