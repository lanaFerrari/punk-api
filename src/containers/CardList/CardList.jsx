import React from "react";
import "./CardList.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardList = (props) => {
  const { beersArray } = props;

  return (
    <div className="container">
      {beersArray.map((beer, index) => {
        return <BeerCard beer={beer} index={index} />;
      })}
    </div>
  );
};

export default CardList;
