import React from "react";
import "./ErrorLoading.css";

import MyButton from "../MyButton/MyButton";

const ErrorLoading = () => {
  // Forzamos la recarga de la página
  const forceRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="load__error">
      <p>¡Algo salió mal!</p>

      <MyButton label="Refresca la página" function={forceRefresh}></MyButton>
    </div>
  );
};

export default ErrorLoading;
