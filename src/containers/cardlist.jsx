import React from "react";
import "./cardlist.scss";
import beerPic from "../imgs/beer.jpg";

const Cardlist = (props) => {
  const { beersArray } = props;

  return (
    <div className="container">
      {beersArray.map((beer, index) => {
        const description = beer.description.split(".");
        return (
          <div key={index} className="container__item">
            <img src={beerPic} alt={beer.name} width="200px" />
            <h3>{beer.name}</h3>
            <p>{`${description[0]}.`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;
