import React from "react";
import "./BeerCard.scss";
import beerPic from "../../imgs/beer.jpg";
import Button from "../Button/Button";
//
const BeerCard = (props) => {
  const { beer, index } = props;
  const description = beer.description.split(".");
  const name = beer.name.toUpperCase();

  return (
    <div key={index} className="container-item">
      <img className="container-item__img" src={beerPic} alt={beer.name} />
      <div className="container-item__tittle-container">
        <h3 className="container-item__tittle-container__title">{name}</h3>
      </div>
      <p className="container-item__paragraph">{`${
        description[0].length >= 50
          ? description[0]
          : description[0] + description[1]
      }.`}</p>

      <div className="container-item__about">
        <p className="container-item__about__ph">ph: {beer.ph}</p>
        <p className="container-item__about__abv">ABV: {beer.abv}</p>
      </div>

      <div className="container-item__button">
        <Button text="Add to basket" link="https://www.brewdog.com/uk" />
        <Button text="More about" id={beer.id} intLink={`/info/${beer.id}`} />
      </div>
    </div>
  );
};

export default BeerCard;
