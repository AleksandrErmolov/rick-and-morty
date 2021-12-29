import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.conteiner}>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/"> Home </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/heroes"> Heroes </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}
