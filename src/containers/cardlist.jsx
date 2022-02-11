import React from "react";
import "./cardlist.scss";
import beerPic from "../imgs/beer.jpg";

const Cardlist = (props) => {
  const { beersArray } = props;

  return (
    <div className="container">
      {beersArray.map((beer, index) => {
        console.log(beer);
        const description = beer.description.split(".");
        return (
          <div key={index} className="container__item">
            <img
              className="container__img"
              src={beerPic}
              alt={beer.name}
              width="200px"
            />
            <div className="container__tittle-container">
              <h3 className="container__tittle-container__title">
                {beer.name}
              </h3>
            </div>
            <p className="container__paragraph">{`${
              description[0].length >= 50
                ? description[0]
                : description[0] + description[1]
            }.`}</p>

            <div className="container__about">
              <p className="container__about__ph">ph: {beer.ph}</p>
              <p className="container__about__abv">ABV: {beer.abv}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardlist;
