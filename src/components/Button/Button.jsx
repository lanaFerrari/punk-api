import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = (props) => {
  const { text, link, id, intLink } = props;
  //
  if (link) {
    return (
      //External Navigation
      <a href={link} target="blank">
        <button className="external">{text}</button>
      </a>
    );
  } else {
    return (
      //Internal Navigation
      <Link to={intLink} key={id}>
        <button className="internal">{text}</button>
      </Link>
    );
  }
};

export default Button;
