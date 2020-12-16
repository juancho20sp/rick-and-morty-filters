import React, { useEffect } from "react";
import "./Home.css";

// Custom Hooks
import useFetchData from "../../hooks/useFetchData";

import HashLoader from "react-spinners/HashLoader";
import Filters from "../../components/Filters/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import InlineFilters from "../../components/InlineFilters/InlineFilters";
import CharacterList from "../../components/CharacterList/CharacterList";
import MyButton from "../../components/MyButton/MyButton";
import ErrorLoading from "../../components/ErrorLoading/ErrorLoading";

const Home = () => {
  // Hook para traer usuarios
  const [loading, error, characterList, fetchData] = useFetchData();

  // Primer renderizado del componente
  useEffect(() => {
    if (characterList.length === 0) {
      fetchData();
    }

    return () => {};
  }, []);

  // <-------------------------->

  return (
    <div>
      <Filters></Filters>
      {/* Mostramos el error (si lo hay) */}
      {error && <ErrorLoading></ErrorLoading>}

      {!loading && !error && (
        <div className="home__searchbar">
          <SearchBar></SearchBar>
        </div>
      )}

      {/* Solo se renderiza si la medida del media query es mayor a 992 */}
      {!loading && !error && <InlineFilters></InlineFilters>}

      {/* Lista de personajes */}
      {loading && !error && (
        <div className="home__spinner">
          <HashLoader size={250} color={"#ff5000"}></HashLoader>
        </div>
      )}

      {!loading && !error && (
        <div className="home__characters">
          <CharacterList></CharacterList>
        </div>
      )}

      <div className="home__load--btn">
        <MyButton
          function={fetchData}
          variant="contained"
          label={loading ? "Cargando..." : "Cargar más"}
        ></MyButton>
      </div>
    </div>
  );
};

export default Home;
