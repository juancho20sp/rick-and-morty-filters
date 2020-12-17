import React, { useEffect } from "react";
import "./Filters.css";

// Custom hooks
import useToggleMenu from "../../hooks/useToggleMenu";
import useFetchLocations from "../../hooks/useFetchLocations";
import useResetFilters from "../../hooks/useResetFilters";

import Button from "@material-ui/core/Button";

import ComboBox from "../ComboBox/ComboBox";
import MyButton from "../MyButton/MyButton";

// Redux
import { useSelector } from "react-redux";

const Filters = () => {
  // Lista de status
  const statusList = useSelector((state) => state.statusOptions);

  const [isMenuOpen, toggleMenu] = useToggleMenu();
  const [loading, err, locations, fetchLocations] = useFetchLocations();

  useEffect(() => {
    fetchLocations();
  }, []);

  // Reseteamos filtros
  const [resetFilters] = useResetFilters();

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
              loading={loading}
              error={err}
            ></ComboBox>
            {/* <ComboBox label="Seleccionar especie" name="especie"></ComboBox> */}
            <ComboBox
              label="Seleccionar ubicación"
              name="ubicacion"
              options={locations[0]}
              loading={loading}
              error={err}
            ></ComboBox>

            <div className="filters__buttons">
              <MyButton
                variant="contained"
                label="Buscar"
                function={toggleMenu}
              ></MyButton>

              <MyButton
                variant="contained"
                label="Limpiar filtros"
                function={resetFilters}
              ></MyButton>
            </div>
          </div>

          <Button onClick={toggleMenu}>Volver</Button>
        </div>
      )}
    </>
  );
};

export default Filters;
