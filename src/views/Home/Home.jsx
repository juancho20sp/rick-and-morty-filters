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

const Home = () => {
  const [loading, error, characterList, fetchData] = useFetchData();

  // Primer renderizado del componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Filters></Filters>

      {console.log(error)}

      {!loading && (
        <div className="home__searchbar">
          <SearchBar></SearchBar>
        </div>
      )}

      {/* Solo se renderiza si la medida del media query es mayor a 992 */}
      <InlineFilters></InlineFilters>

      {/* Lista de personajes */}
      {loading && (
        <div className="home__spinner">
          <HashLoader size={250} color={"#ff5000"}></HashLoader>
        </div>
      )}

      {!loading && (
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
      {console.log(characterList)}
    </div>
  );
};

export default Home;
