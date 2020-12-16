import React, { useState, useMemo, useEffect } from "react";
import "./CharacterList.css";

// Redux
import { useSelector } from "react-redux";

import useFetchData from "../../hooks/useFetchData";

import CharacterCard from "../CharacterCard/CharacterCard";
// import useFetchCharacter from "../../hooks/useFetchCharacter";

const CharacterList = () => {
  // Traemos los personajes
  const characters = useSelector((state) => state.characterList);

  // Query para el filtro por nombre
  const name = useSelector((state) => state.name);

  // Filtro por ubicación
  const location = useSelector((state) => state.location);

  // Filtro por estado
  const status = useSelector((state) => state.status);

  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useMemo(() => {
    let result = characters.filter((char) => {
      return char.name.toLowerCase().includes(name.toLowerCase());
    });

    if (location.length > 0) {
      result = result.filter((char) => {
        return char.location.name
          .toLowerCase()
          .includes(location.toLowerCase());
      });
    }

    setFilteredCharacters(result);
  }, [characters, name, location]);

  return (
    <div className="characterList__container">
      {filteredCharacters.map((char) => (
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
