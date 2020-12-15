import React from "react";
import "./Filters.css";

// Custom hooks
import useToggleMenu from "../../hooks/useToggleMenu";

import Button from "@material-ui/core/Button";

import SearchBar from "../SearchBar/SearchBar";
import ComboBox from "../ComboBox/ComboBox";

const Filters = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu();

  return (
    <>
      {isMenuOpen && (
        <div className="filters__container">
          <h3 className="filters__title">Menú</h3>
          <div>
            <ComboBox label="Seleccionar estado" name="estado"></ComboBox>
            <ComboBox label="Seleccionar especie" name="especie"></ComboBox>
            <ComboBox label="Seleccionar ubicación" name="ubicacion"></ComboBox>
          </div>

          <Button onClick={toggleMenu}>Volver</Button>
        </div>
      )}
    </>
  );
};

export default Filters;
