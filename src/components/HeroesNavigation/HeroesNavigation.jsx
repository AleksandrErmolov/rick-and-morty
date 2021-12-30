import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <Link to={`/heroes/?page=${counterPage - 1}`} className={styles.link}>
        <button
          onClick={handleChangePrev}
          className={styles.buttons}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>

      <Link to={`/heroes/?page=${counterPage + 1}`} className={styles.link}>
        <button
          onClick={handleChangeNext}
          className={styles.buttons}
          disabled={!nextPage}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
