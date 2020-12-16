import React, { useEffect } from "react";

import "./Character.css";

// React router
import { useParams, useHistory } from "react-router-dom";

// Custom hook
import useFetchCharacter from "../../hooks/useFetchCharacter";

import MyButton from "../../components/MyButton/MyButton";

const Character = () => {
  // Traemos el ID del personaje de la URL
  const { charId } = useParams();
  const history = useHistory();

  // Traemos los datos de los personajes
  const [loading, err, charData, fetchCharacterData] = useFetchCharacter(
    charId
  );

  // En el primer render traemos la información
  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <div className="character__container">
      {console.log(charData)}

      {!loading && charData.image && (
        <div className="character__image">
          <img src={charData.image} alt={charData.name} />
        </div>
      )}

      {loading && <p>cargando</p>}

      {!loading && charData.name && (
        <div className="character__info">
          <p className="char__name">{charData.name}</p>
          <p className="char__origin">Origin: {charData.origin.name}</p>

          <p className="char__status">Status: {charData.status}</p>
          {/* <div className="character__episodes">
              <p>Episodes: </p>
              {charData.episode.slice(0, 10).map((episode, idx) => (
                <p key={idx}>
                  {episode.replace(
                    "https://rickandmortyapi.com/api/episode/",
                    ""
                  )}
                </p>
              ))}
            </div> */}
        </div>
      )}

      <div className="character__button">
        <MyButton label="volver" function={history.goBack}></MyButton>
      </div>
    </div>
  );
};

export default Character;
