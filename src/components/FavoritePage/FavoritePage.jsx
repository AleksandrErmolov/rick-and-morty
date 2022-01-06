import React from 'react'
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Heroeslist from '../Heroeslist/Heroeslist';

import styles from "./FavoritePage.module.css";


export default function FavoritePage() {

    const [hero, setHero] = useState([]);

    const storeData = useSelector((state) => state.favoriteReducer);
    

      useEffect(() => {
        const arr = Object.entries(storeData);
        if (arr.length) {
            const res = arr.map((item) => {
              
            return {
            id: item[0],
            name: item[1].name,
            image: item[1].img,
            };
          });
          setHero(res);
        }
      }, []);


    return (
      <div>
        <h1 className="header__text">Favorite Page</h1>
        {hero.length ? (
          <Heroeslist data={hero} />
        ) : (
          <h2 className={styles.comment}>
            Список пуст!
            <br /> Добавьте в <span className="header__text"> избранное </span>
            из раздела <span className="header__text">Hero </span>
          </h2>
        )}
      </div>
    );
}
