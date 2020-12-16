import React, { useState, useMemo, useEffect } from "react";
import "./CharacterList.css";

// Custom hooks
import useFilterCharacters from "../../hooks/useFilterCharacters";
import useResetFilters from "../../hooks/useResetFilters";

import CharacterCard from "../CharacterCard/CharacterCard";
import MyButton from "../MyButton/MyButton";

const CharacterList = () => {
  // Filtros
  const [filteredCharacters] = useFilterCharacters();

  // Resetear filtros
  const [resetFilters] = useResetFilters();

  return (
    <>
      {filteredCharacters.length === 0 && (
        <div className="characterList__error">
          <p>Ups! Prueba con menos filtros o carga más personajes</p>
          <MyButton label="Limpiar filtros" function={resetFilters}></MyButton>
        </div>
      )}
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
    </>
  );
};

export default CharacterList;
