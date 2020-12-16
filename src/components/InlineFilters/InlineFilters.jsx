import React, { useEffect } from "react";
import "./InlineFilters.css";

// Custom hooks
import useFetchLocations from "../../hooks/useFetchLocations";

import SearchBar from "../SearchBar/SearchBar";
import ComboBox from "../ComboBox/ComboBox";

// Valores del combo
import { statusList } from "../ComboBox/Status";

const InlineFilters = () => {
  const [loading, err, locations, fetchLocations] = useFetchLocations();

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="inlineFilters__container" id="sticky-bar">
      {console.log(locations)}
      <SearchBar></SearchBar>
      <ComboBox
        label="Seleccionar estado"
        name="estado"
        options={statusList}
      ></ComboBox>
      {/* <ComboBox label="Seleccionar especie" name="especie"></ComboBox> */}
      <ComboBox
        label="Seleccionar ubicación"
        name="ubicacion"
        test="asd"
        options={locations.length ? locations[0] : [1, 2, 3]}
      ></ComboBox>
    </div>
  );
};

export default InlineFilters;
