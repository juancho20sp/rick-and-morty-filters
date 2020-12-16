import React from "react";
import "./CharacterCard.css";

import Button from "@material-ui/core/Button";

const CharacterCard = ({ id, name, location, status, image }) => {
  return (
    <div className="card__container">
      <img src={image} alt={`${name} photo`} className="card__img" />
      <div className="card__info">
        <div className="card__info--text">
          <p className="character__name">{name}</p>
          <p className="character__location">{location}</p>
          <p className="character__status">{status}</p>
        </div>
        <Button className="card__info--button" variant="contained">
          Ver más
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
