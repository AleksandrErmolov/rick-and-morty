import React from "react";
import cn from 'classnames'

import "../index.css";
import styles from "./UiButton.module.css";

export default function UiButton({
    text,
    onClick,
    disabled,
    theme = "dark",
    classes
}) {
  return (
    <button
      onClick={onClick}
      className={cn(styles.button, styles[theme], classes)}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
