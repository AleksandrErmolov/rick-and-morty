import React from "react";
import { Link } from "react-router-dom";
import UiButton from "../UI/UiButton/UiButton";

import styles from "./HeroesNavigation.module.css";

export default function HeroesNavigation({
  counterPage,
  nextPage,
  prevPage,
  getResource,
}) {
  const handleChangePrev = () => {
    getResource(prevPage);
  };

  const handleChangeNext = () => {
    getResource(nextPage);
  };

  return (
    <div className={styles.container}>
      <Link to={`/heroes/?page=${counterPage - 1}`} className={styles.link}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!prevPage}
        />
      </Link>

      <Link to={`/heroes/?page=${counterPage + 1}`} className={styles.link}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
}
