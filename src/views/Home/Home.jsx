import React, { useState, useEffect } from "react";
import "./Home.css";

// Custom Hooks
import useFetchData from "../../hooks/useFetchData";

import HashLoader from "react-spinners/HashLoader";
import Filters from "../../components/Filters/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import InlineFilters from "../../components/InlineFilters/InlineFilters";
import CharacterList from "../../components/CharacterList/CharacterList";

const Home = () => {
  const [loading, error, characterList, fetchData] = useFetchData();

  // Primer renderizado del componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Filters></Filters>

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

      <button onClick={fetchData}>Holiwi</button>
      {console.log(characterList)}
    </div>
  );
};

export default Home;
