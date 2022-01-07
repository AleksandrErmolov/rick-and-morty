import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../FavoritePage/Favorite/Favorite";

import styles from "./Header.module.css";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../context/ThemeProvider";

import dark from "./img/dark.svg";
import light from "./img/light.png";
import neitral from "./img/neitral.svg";

export default function Header() {
  const [icon, setIcon] = useState(dark);

  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(light);
        break;
      case THEME_DARK:
        setIcon(dark);
        break;
      case THEME_NEITRAL:
        setIcon(neitral);
        break;

      default:
        setIcon(dark);
    }
  }, [isTheme]);

  return (
    <div className={styles.conteiner}>
      <img className={styles.logo} src={icon} alt="Logo" />

      <ul className={styles.list__container}>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/heroes/?page=1"> Heroes </NavLink>
        </li>
        <li>
          <NavLink to="/not-found"> Not Found </NavLink>
        </li>
        <li>
          <NavLink to="/fail"> Fail </NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
}
