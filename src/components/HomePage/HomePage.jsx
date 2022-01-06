import React from "react";
import styles from "./HomePage.module.css";
import ChooseSide from './ChooseSide/ChooseSide'

export default function HomePage() {
  return (
    <div>
      <h1 className="header__text">HOME PAGE</h1>
      <ChooseSide />
    </div>
  );
}
