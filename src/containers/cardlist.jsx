import React from "react";
import "./Cardlist.scss";
import BeerCard from "../components/BeerCard/BeerCard";

const Cardlist = (props) => {
  const { beersArray } = props;

  return (
    <div className="container">
      {beersArray.map((beer, index) => {
        return <BeerCard beer={beer} index={index} />;
      })}
    </div>
  );
};

export default Cardlist;
//
