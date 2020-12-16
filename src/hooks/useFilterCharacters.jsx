import { useState, useMemo } from "react";

import { useSelector } from "react-redux";

const useFilterCharacters = () => {
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

    if (status.length > 0) {
      result = result.filter((char) => {
        return char.status === status;
      });
    }

    setFilteredCharacters(result);
  }, [characters, name, location, status]);

  return [filteredCharacters];
};

export default useFilterCharacters;
