import React from "react";
import cn from "classnames";

import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "../../../context/ThemeProvider";
import imgLightSide from "./img/light-side.jpg";
import imgDarktSide from "./img/dark-side.jpg";
import imgNeitralSide from "./img/neitral-side.jpg";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();

  return (
    <div
      onClick={() => isTheme.change(theme)}
      className={cn(styles.item, classes)}
    >
      <div className={styles.item__header}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

export default function ChooseSide() {
  const elemets = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: styles.item__light,
    },

    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarktSide,
      classes: styles.item__dark,
    },

    {
      theme: THEME_NEITRAL,
      text: "Neitral Side",
      img: imgNeitralSide,
      classes: styles.item__neitral,
    },
  ];

  return (
    <div className={styles.container}>
      {elemets.map((element, index) => (
        <ChooseSideItem
          key={index}
          theme={element.theme}
          text={element.text}
          img={element.img}
          classes={element.classes}
        />
      ))}
    </div>
  );
}
