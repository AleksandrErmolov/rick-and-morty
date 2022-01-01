import React from "react";
import styles from "./Heroeslist.module.css";
import { Link } from "react-router-dom"

export default function Heroeslist({ data }) {
  return (
    <div>
      <ul className={styles.list__container}>
        {data.results.map((person) => (
          <li className={styles.list__item} key={person.id}>
            <Link to={`/heroes/${person.id}`}>
              <img
                className={styles.person__photo}
                src={person.image}
                alt={person.name}
              />
              <p> {person.name} </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
