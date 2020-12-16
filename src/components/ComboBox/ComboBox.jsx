import React, { useState } from "react";
import "./ComboBox.css";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const ComboBox = (props) => {
  console.log(props);

  // Hook para controlar el combo
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name, event.target.value);

    setValue(event.target.value9);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>{props.label}</InputLabel>
      <Select native value={value} name={props.name} onChange={handleChange}>
        <option value={""}>{props.label}</option>

        {console.log(props)}

        {props.options &&
          props.options.map((option) => {
            return (
              <option value={option.name} key={option.id}>
                {option.name}
              </option>
            );
          })}

        <option value="asd">Holiwi 2</option>
        <option value="asd">Holiwi 3</option>
      </Select>
    </FormControl>
  );
};

export default ComboBox;
