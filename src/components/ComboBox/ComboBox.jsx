import React from "react";
import "./ComboBox.css";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const handleChange = () => {
  console.log("Holiwi");
};

const ComboBox = (props) => {
  return (
    <TextField
      select
      label={props.label}
      value={"Hook o redux"}
      onChange={handleChange}
      helperText={`Seleccione un ${props.helper}`}
      variant="filled"
    >
      <MenuItem key="1" value="11">
        Holiwi
      </MenuItem>
    </TextField>
  );
};

export default ComboBox;
