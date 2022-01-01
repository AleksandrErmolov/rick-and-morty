import React from "react";

import styles from "./HeroInfo.module.css";


export default function HeroInfo({heroInfo} ) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {heroInfo.map(
          ({ title, data }) =>
            data && (
              <li className={styles.list__item} key={title}>
                <span className={styles.item__title}>{title}:</span> {data}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
