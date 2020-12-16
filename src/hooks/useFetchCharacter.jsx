import React, { useState } from "react";

const useFetchCharacter = (id) => {
  console.log("Fetching character...");

  //   Hook para el loader
  const [loading, setLoading] = useState(false);

  //   Hook para el mensaje de error
  const [err, setErr] = useState("");

  //   Hook para los datos del personaje
  const [charData, setCharData] = useState({});

  //   Traemos los datos de la API
  const fetchCharacterData = async () => {
    //   Activamos el loader
    setLoading(true);

    // Llamamos la API
    try {
      let results = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );

      results = await results.json();

      //   Desactivamos el loader
      setLoading(false);

      //   Guardamos los datos del personaje en el estado
      setCharData(results);
    } catch (err) {
      // Desactivamos el loader
      setLoading(false);

      //   Guardamos el error
      setErr(err);
    }
  };

  return [loading, err, charData, fetchCharacterData];
};

export default useFetchCharacter;
