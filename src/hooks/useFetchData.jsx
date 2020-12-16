import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setCharacterList, setNextPage } from "../redux/actions";

const useFetchData = () => {
  // console.log("Fetching...");

  // Redux
  const globalState = useSelector((state) => state);

  const dispatcher = useDispatch();

  // Hook para el loader
  const [loading, setLoading] = useState(false);

  // Hook para el mensaje de error
  const [err, setErr] = useState("");

  // Traemos datos de la API
  const fetchData = async () => {
    // Activamos el loader
    setLoading(true);

    // Llamamos la API
    try {
      let results = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${globalState.nextPage}`
      );

      results = await results.json();

      // Desactivamos el loader
      setLoading(false);

      // Agregamos uno a la paginación
      dispatcher(setNextPage());

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

  return [loading, err, globalState.characterList, fetchData];
};

export default useFetchData;
