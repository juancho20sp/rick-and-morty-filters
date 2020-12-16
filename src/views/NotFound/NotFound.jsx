import React from "react";
import "./NotFound.css";

import { useHistory } from "react-router-dom";

import MyButton from "../../components/MyButton/MyButton";
import Routes from "../../routes/Routes";

const NotFound = () => {
  const history = useHistory();

  const backToHome = () => {
    history.push(Routes.home.path);
  };

  return (
    <div className="notFound__container">
      <p>
        ¡Ups! <br /> No encontramos lo que buscas
      </p>

      <MyButton label="Volver a inicio" function={backToHome}></MyButton>
    </div>
  );
};

export default NotFound;
