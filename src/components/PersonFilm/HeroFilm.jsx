import React from "react";
import { useState, useEffect } from "react";

import { makeConcurrentRequest } from "../../services/getPeopleData";

import styles from "./HeroFilm.module.css";

export default function HeroFilm({ heroFilms }) {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(heroFilms);
      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {filmsName
          .sort((a, z) => a.id - z.id)
          .map(({ name, id }) => (
            <li className={styles.list__item} key={id}>
              <span className={styles.item__episode}>Episode {id} </span>
              <span className={styles.list__colon}>:</span>
              <span className={styles.list__title}>{name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
