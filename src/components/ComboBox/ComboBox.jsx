import React from "react";
import "./ComboBox.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const handleChange = (event) => {
  const name = event.target.name;
  console.log(name);
};

const ComboBox = (props) => {
  return (
    <FormControl variant="outlined">
      <InputLabel>{props.label}</InputLabel>
      <Select native value="asd" name={props.name} onChange={handleChange}>
        <option value="asd">Holiwi 1</option>
        <option value="asd">Holiwi 2</option>
        <option value="asd">Holiwi 3</option>
      </Select>
    </FormControl>
  );
};

export default ComboBox;
