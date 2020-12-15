import React, { useState, useEffect } from "react";
import "./Home.css";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setCharacterList } from "../../redux/actions";

import Filters from "../../components/Filters/Filters";

const Home = () => {
  // Redux
  const globalState = useSelector((state) => state);

  const dispatcher = useDispatch();

  // Hook para el loader
  const [loading, setLoading] = useState(false);

  // Hook para los datos de búsqueda
  const [nextPage, setNextPage] = useState(1);

  // Hook para el mensaje de error
  const [err, setErr] = useState("");

  // Traemos datos de la API
  const fetchData = async () => {
    // Activamos el loader
    setLoading(true);

    // Llamamos la API
    try {
      let results = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${nextPage}`
      );

      results = await results.json();

      console.log(results);

      // Desactivamos el loader
      setLoading(false);

      // Agregamos uno a la paginación
      setNextPage(nextPage + 1);

      // Guardamos los datos
      dispatcher(
        setCharacterList([].concat(globalState.characterList, results.results))
      );
    } catch (err) {
      // Desactivamos el loader
      setLoading(false);

      // Guardamos el error
      setErr(err);
    }
  };

  // Primer renderizado del componente
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(globalState.characterList);
  }, [globalState.characterList]);

  return (
    <div>
      This is home
      <Filters></Filters>
      <button onClick={fetchData}>Holiwi</button>
    </div>
  );
};

export default Home;
