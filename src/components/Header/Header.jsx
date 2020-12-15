import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Routes from "../../routes/Routes";

// Íconos
import MenuIcon from "@material-ui/icons/Menu";

// Colores
import { grey } from "@material-ui/core/colors";

// Hooks de redux
import { useSelector, useDispatch } from "react-redux";

// Traemos los action de redux
import { toggleMenu } from "../../redux/actions";

const Header = () => {
  // Traemos el estado global
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  //   Creamos el dispatcher
  const dispatcher = useDispatch();

  //   Modificamos el estado global
  const toggle = () => dispatcher(toggleMenu());

  return (
    <div className="header__container">
      <div className="header__icon">
        <MenuIcon style={{ color: grey[200] }} onClick={toggle}></MenuIcon>
      </div>

      <Link to={Routes.home.path}>
        <h1 className="header__title">Houm | Rick and Morty</h1>
      </Link>
    </div>
  );
};

export default Header;
