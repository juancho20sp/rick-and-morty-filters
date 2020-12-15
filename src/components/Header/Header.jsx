import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Routes from "../../routes/Routes";

// Custom hooks
import useToggleMenu from "../../hooks/useToggleMenu";

// Íconos
import MenuIcon from "@material-ui/icons/Menu";

// Colores
import { grey } from "@material-ui/core/colors";

const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggleMenu();

  return (
    <div className="header__container">
      <div className="header__icon">
        <MenuIcon style={{ color: grey[200] }} onClick={toggleMenu}></MenuIcon>
      </div>

      <Link to={Routes.home.path}>
        <h1 className="header__title">Houm | Rick and Morty</h1>
      </Link>

      {console.log(isMenuOpen)}
    </div>
  );
};

export default Header;
