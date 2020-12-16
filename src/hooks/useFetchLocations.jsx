import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setLocationOptions } from "../redux/actions";

const recursiveLocation = async (URL, finalResults) => {
  try {
    let results = await fetch(URL);
    results = await results.json();

    finalResults = [].concat(finalResults, results.results);

    if (results.info.next == null) {
      return finalResults;
    }

    return await recursiveLocation(results.info.next, finalResults);
  } catch (err) {
    console.log(err);
  }
};

const useFetchLocations = () => {
  console.log("Fetching locations...");
  // Redux
  const locations = useSelector((state) => state.locationOptions);
  const dispatcher = useDispatch();

  //   Hook para el loader
  const [loading, setLoading] = useState(false);

  //   Hook para el mensaje de error
  const [err, setErr] = useState("");

  // Hook para la lista de ubicaciones
  const [locationList, setLocationList] = useState([]);

  //   Llamamos la API
  const fetchLocations = async () => {
    // Activamos el loader

    try {
      let results = await fetch(`https://rickandmortyapi.com/api/location`);

      results = await results.json();

      //   Desactivamos el loader
      setLoading(false);

      //   Agregamos los resultados al estado global
      console.log(results);
      console.log(results.results);

      //   let finalResults = await recursiveLocation(
      //     results.info.next,
      //     results.results
      //   );

      dispatcher(setLocationOptions([results.results]));
    } catch (err) {
      // Desativamos el loader
      setLoading(false);

      //   Guardamos el error
      setErr(err);
    }
  };

  return [loading, err, locations, fetchLocations];
};

export default useFetchLocations;
