import React from "react";
import "./InlineFilters.css";

import SearchBar from "../SearchBar/SearchBar";
import ComboBox from "../ComboBox/ComboBox";

const InlineFilters = () => {
  return (
    <div className="inlineFilters__container" id="sticky-bar">
      <SearchBar></SearchBar>
      <ComboBox label="Seleccionar estado" name="status"></ComboBox>
      <ComboBox label="Seleccionar especie" name="species"></ComboBox>
      <ComboBox label="Seleccionar ubicación" name="location"></ComboBox>
    </div>
  );
};

export default InlineFilters;
