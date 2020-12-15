import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import ComboBox from "../ComboBox/ComboBox";

const Filters = () => {
  return (
    <div>
      <SearchBar></SearchBar>
      <ComboBox label="Seleccionar estado" helper="estado"></ComboBox>
    </div>
  );
};

export default Filters;
