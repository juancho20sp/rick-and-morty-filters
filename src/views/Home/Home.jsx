import React, { useState, useEffect } from "react";
import "./Home.css";

// Custom Hooks
import useFetchData from "../../hooks/useFetchData";

import Filters from "../../components/Filters/Filters";

const Home = () => {
  const [loading, error, characterList, fetchData] = useFetchData();

  // Primer renderizado del componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      This is home
      <Filters></Filters>
      <button onClick={fetchData}>Holiwi</button>
      {console.log(characterList)}
    </div>
  );
};

export default Home;
