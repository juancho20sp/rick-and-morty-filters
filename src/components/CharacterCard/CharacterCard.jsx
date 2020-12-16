import React, { useCallback } from "react";
import "./CharacterCard.css";

import { useHistory } from "react-router-dom";

import MyButton from "../MyButton/MyButton";
import Routes from "../../routes/Routes";

const CharacterCard = ({ id, name, location, status, image }) => {
  // Hooks del router
  const history = useHistory();
  const handleClick = useCallback(() => {
    console.log(id);
    history.push(`${Routes.character.shortPath}/${id}`);
  }, [id]);

  return (
    <div className="card__container">
      <img src={image} alt={`${name}`} className="card__img" />
      <div className="card__info">
        <div className="card__info--text">
          <p className="character__name">{name}</p>
          <p className="character__location">{location}</p>
          <p className="character__status">{status}</p>
        </div>
        <MyButton
          className="card__info--button"
          variant="contained"
          label={"Ver más"}
          goToCharacter={handleClick}
        ></MyButton>
      </div>
    </div>
  );
};

export default CharacterCard;
