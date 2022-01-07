import React from "react";
import styles from "./ErrorMessage.module.css";
import UIVideo from "../UI/UIVideo/UIVideo";
import video from "./video/video.mp4";

export default function ErrorMessage() {
  return (
    <div>
      <p className={styles.text}>
        The dark side of the force has won. <br />
        We cannot display data. <br />
        Come back when we fix everything
      </p>
      <UIVideo src={video} classes={styles.video} playbackRate={1} />
    </div>
  );
}
