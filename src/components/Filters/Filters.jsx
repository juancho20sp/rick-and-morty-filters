import React, { useState, useEffect } from "react";
import "./Filters.css";

// Custom hooks
import useToggleMenu from "../../hooks/useToggleMenu";
import useFetchLocations from "../../hooks/useFetchLocations";

import Button from "@material-ui/core/Button";

import ComboBox from "../ComboBox/ComboBox";
import MyButton from "../MyButton/MyButton";

// Valores del combo
import { statusList } from "../ComboBox/Status";

const Filters = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu();
  const [loading, err, locations, fetchLocations] = useFetchLocations();

  useEffect(() => {
    fetchLocations();
  }, []);

  // Función que limpia filtros
  const [cleanFilters, setCleanFilters] = useState(false);

  const cleanClicked = () => {
    console.log("Cleaning filters");
    setCleanFilters(true);
  };

  return (
    <>
      {isMenuOpen && (
        <div className={`filters__container ${isMenuOpen ? "show" : "hide"}`}>
          <h3 className="filters__title">Menú</h3>
          <div>
            <ComboBox
              label="Seleccionar estado"
              name="estado"
              options={statusList}
              clean={cleanFilters}
            ></ComboBox>
            {/* <ComboBox label="Seleccionar especie" name="especie"></ComboBox> */}
            <ComboBox
              label="Seleccionar ubicación"
              name="ubicacion"
              options={locations[0]}
              clean={cleanFilters}
            ></ComboBox>

            <MyButton
              variant="contained"
              label="Limpiar filtros"
              function={cleanClicked}
            ></MyButton>
          </div>

          <Button onClick={toggleMenu}>Volver</Button>
        </div>
      )}
    </>
  );
};

export default Filters;
