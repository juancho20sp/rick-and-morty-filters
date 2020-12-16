import React from "react";
import "./CharacterList.css";

// Redux
import { useSelector } from "react-redux";

import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = () => {
  const characters = useSelector((state) => state.characterList);
  return (
    <div className="characterList__container">
      {characters.map((char) => (
        <CharacterCard
          id={char.id}
          name={char.name}
          location={char.location.name}
          status={char.status}
          image={char.image}
          key={char.id}
        ></CharacterCard>
      ))}
    </div>
  );
};

export default CharacterList;
