import React, { useState } from "react";
import "./ComboBox.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// Redux
import { useDispatch } from "react-redux";
import { setStatus, setLocation } from "../../redux/actions";

const ComboBox = (props) => {
  // Redux
  const dispatcher = useDispatch();

  // Hook para controlar el combo
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;

    switch (name) {
      case "estado":
        dispatcher(setStatus(newValue));
        break;

      case "ubicacion":
        dispatcher(setLocation(newValue));
        break;
      default:
        break;
    }

    setValue(event.target.value);
  };

  // Limpiar filtros

  return (
    <FormControl variant="outlined">
      <InputLabel>{props.label}</InputLabel>
      <Select native value={value} name={props.name} onChange={handleChange}>
        <option value="">{props.label}</option>

        {props.options &&
          props.options.map((option) => {
            return (
              <option
                key={Math.floor(Math.random() * 10000000)}
                value={option.name}
              >
                {option.name}
              </option>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default ComboBox;
