import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Routes from "../../routes/Routes";

// Íconos
import MenuIcon from "@material-ui/icons/Menu";

// Colores
import { grey } from "@material-ui/core/colors";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__icon">
        <MenuIcon style={{ color: grey[200] }}></MenuIcon>
      </div>

      <Link to={Routes.home.path}>
        <h1 className="header__title">Houm | Rick and Morty</h1>
      </Link>
    </div>
  );
};

export default Header;
