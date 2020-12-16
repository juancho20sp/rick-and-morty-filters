import React from "react";
import "./SearchBar.css";

import TextField from "@material-ui/core/TextField";

import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../redux/actions";
// Conectamos la barra de búsqueda al estado global

const SearchBar = () => {
  // Taremos 'name' del estado global
  // const name = useSelector((state) => state.name);

  // Creamos el dispatcher
  const dispatcher = useDispatch();

  // Con el cambio de TextField cambiamos el 'name' del estado global
  const handleChange = (event) => {
    dispatcher(setName(event.target.value));
  };

  return (
    <div>
      <TextField
        variant="outlined"
        type="search"
        label="Buscar personaje"
        className="searchbar"
        onChange={handleChange}
      ></TextField>
    </div>
  );
};

export default SearchBar;
