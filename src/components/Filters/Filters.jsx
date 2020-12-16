import React, { useEffect } from "react";
import "./Filters.css";

// Custom hooks
import useToggleMenu from "../../hooks/useToggleMenu";
import useFetchLocations from "../../hooks/useFetchLocations";

import Button from "@material-ui/core/Button";

import ComboBox from "../ComboBox/ComboBox";

// Valores del combo
import { statusList } from "../ComboBox/Status";

const Filters = () => {
  console.log(statusList);

  const [isMenuOpen, toggleMenu] = useToggleMenu();
  const [loading, err, locations, fetchLocations] = useFetchLocations();

  useEffect(() => {
    fetchLocations();
    console.log(locations[1]);
  }, []);

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
            ></ComboBox>
            <ComboBox label="Seleccionar especie" name="especie"></ComboBox>
            <ComboBox
              label="Seleccionar ubicación"
              name="ubicacion"
              test="asd"
              optionList={locations[1]}
            ></ComboBox>
          </div>

          <Button onClick={toggleMenu}>Volver</Button>
        </div>
      )}
    </>
  );
};

export default Filters;
