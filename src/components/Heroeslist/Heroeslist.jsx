import React from "react";
import styles from "./Heroeslist.module.css";
import { Link } from "react-router-dom"

export default function Heroeslist({ data }) {

  return (
    <div>
      <ul className={styles.list__container}>
        {data.map(({id, name, image}) => (
          <li className={styles.list__item} key={id}>
            <Link to={`/heroes/${id}`}>
              <img
                className={styles.person__photo}
                src={image}
                alt={name}
              />
              <p> {name} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
