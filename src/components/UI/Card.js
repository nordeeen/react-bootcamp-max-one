import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // passing props.classCSS to AddUsers.js
    <React.Fragment>
      <div className={`${classes.card} ${props.classCSS}`}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Card;
