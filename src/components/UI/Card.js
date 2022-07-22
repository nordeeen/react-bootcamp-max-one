import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // passing props.classCSS to AddUsers.js
    <>
      <div className={`${classes.card} ${props.classCSS}`}>
        {props.children}
      </div>
    </>
  );
};

export default Card;
