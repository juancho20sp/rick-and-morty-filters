import React from "react";
import "./MyButton.css";
import Button from "@material-ui/core/Button";

const MyButton = (props) => {
  return (
    <Button onClick={props.function} className="myButton" variant="contained">
      {props.label}
    </Button>
  );
};

export default MyButton;
