import React, { useEffect } from "react";
import "./InlineFilters.css";

// Custom hooks
import useFetchLocations from "../../hooks/useFetchLocations";

import SearchBar from "../SearchBar/SearchBar";
import ComboBox from "../ComboBox/ComboBox";

// Redux
import { useSelector } from "react-redux";

const InlineFilters = () => {
  // Lista de status
  const statusList = useSelector((state) => state.statusOptions);

  const [loading, err, locations, fetchLocations] = useFetchLocations();

  useEffect(() => {
    fetchLocations();

    return () => "";
  }, []);

  return (
    <div className="inlineFilters__container" id="sticky-bar">
      <SearchBar></SearchBar>
      <ComboBox
        label="Seleccionar estado"
        name="estado"
        options={statusList}
        key="1"
        loading={loading}
        error={err}
      ></ComboBox>
      {/* <ComboBox label="Seleccionar especie" name="especie"></ComboBox> */}
      <ComboBox
        label="Seleccionar ubicación"
        name="ubicacion"
        test="asd"
        options={locations.length ? locations[0] : [1, 2, 3]}
        key="2"
        loading={loading}
        error={err}
      ></ComboBox>
    </div>
  );
};

export default InlineFilters;
