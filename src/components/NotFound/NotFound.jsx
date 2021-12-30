import React from 'react'
import img from '../NotFound/img/not-found.png'
import { useLocation } from "react-router";
import styles from "./NotFound.module.css";



export default function NotFound() {
  let location = useLocation();

  return (
    <div className={styles.head}>
      <img className={styles.img} src={img} alt="not found" />
      <p className={styles.text}>No match for {location.pathname}</p>
    </div>
  );
}
