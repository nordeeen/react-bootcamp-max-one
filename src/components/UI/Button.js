import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <React.Fragment>
      <button
        className={classes.button}
        type={props.type || "button"}
        onClick={props.onKlik}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
