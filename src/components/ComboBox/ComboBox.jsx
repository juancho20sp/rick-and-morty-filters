import React, { useState } from "react";
import "./ComboBox.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setStatus, setSpecies, setLocation } from "../../redux/actions";

const ComboBox = (props) => {
  // Redux
  const state = useSelector((state) => console.log(state));

  // Hook para controlar el combo
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name, event.target.value);

    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>{props.label}</InputLabel>
      <Select native value={value} name={props.name} onChange={handleChange}>
        <option value="">{props.label}</option>

        {props.options &&
          props.options.map((option) => {
            return (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default ComboBox;
