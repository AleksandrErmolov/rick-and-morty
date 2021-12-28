import React from "react";
import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won. <br />
        We cannot display data. <br />
        Come back when we fix everything
      </p>
    </div>
  );
}
