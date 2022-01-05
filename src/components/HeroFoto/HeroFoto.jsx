import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToFavoorite, removeFromFavoorite } from '../../store/action/index' 
import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";

import styles from "./HeroFoto.module.css";

export default function HeroFoto({
  heroName,
  heroFoto,
  heroId,
  heroFavorite,
  setHeroFavorite,
}) {
  const store = useSelector((state) => state.favoriteReducer);

  console.log(store);

  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if ( heroFavorite) {
      dispatch(removeFromFavoorite(heroId));
       setHeroFavorite(false);
    } else {
      dispatch(
        addToFavoorite({
          [heroId]: {
            name: heroName,
            img: heroFoto,
          },
        })
      );
       setHeroFavorite(true);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.photo} src={heroFoto} alt={heroName} />
      <img
        className={styles.favorite}
        onClick={dispatchFavoritePeople}
        src={heroFavorite ? iconFavoriteFill : iconFavorite}
        alt="Add to favorite"
      />
    </div>
  );
}
