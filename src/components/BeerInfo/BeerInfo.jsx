import React from "react";
import "./BeerInfo.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Button from "../Button/Button";

const BeerInfo = (props) => {
  const { beersList } = props;
  const { id } = useParams();

  const foundBeer = beersList.filter((beer) => beer.id === Number(id));
  const [beer, setBeer] = useState(foundBeer[0]);
  //
  return (
    <main>
      <div className="contain">
        <section className="contain__img">
          <img src={beer.image_url} alt={beer.name} />
        </section>
        <section className="contain__about">
          <div>
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
          </div>

          <p className="about__paragraph">{beer.description}</p>

          <ul className="contain__about__list">
            <li className="green-c">
              Vol:{" "}
              <span className="black-c">
                {beer.volume.value} {beer.volume.unit}
              </span>
            </li>
            <li className="green-c">
              ph: <span className="black-c">{beer.ph}</span>
            </li>
            <li className="green-c">
              ABV: <span className="black-c">{beer.abv}</span>
            </li>
            <li className="green-c">
              IBU: <span className="black-c">{beer.ibu}</span>
            </li>
            <li className="green-c">
              SRM: <span className="black-c">{beer.srm}</span>
            </li>
            <li className="green-c">
              EBC: <span className="black-c">{beer.ebc}</span>
            </li>
          </ul>

          <div className="contain__about__button">
            <Button text="Add to basket" link="https://www.brewdog.com/uk" />
            <Button text="Back to home" id={beer.id} intLink={`/`} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default BeerInfo;
