import React from 'react'

import styles from "./HeroFoto.module.css";

export default function HeroFoto({ heroName, heroFoto }) {
  return (
    <div className={styles.container}>
      <img className={styles.photo} src={heroFoto} alt={heroName} />
    </div>
  );
}
