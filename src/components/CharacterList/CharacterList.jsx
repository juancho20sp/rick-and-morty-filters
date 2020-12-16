import React, { useState, useMemo, useEffect } from "react";
import "./CharacterList.css";

// Redux
import { useDispatch } from "react-redux";
import { setStatus, setLocation, setName } from "../../redux/actions";

import useFilterCharacters from "../../hooks/useFilterCharacters";

import CharacterCard from "../CharacterCard/CharacterCard";
import MyButton from "../MyButton/MyButton";

const CharacterList = () => {
  // Filtros
  const [filteredCharacters] = useFilterCharacters();

  // Resetear filtros
  const dispatcher = useDispatch();

  const resetFilters = () => {
    // Reseteamos nombre
    dispatcher(setName(""));

    // Reseteamos estado
    dispatcher(setStatus(""));

    // Reseteamos ubicación
    dispatcher(setLocation(""));
  };

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
