import React, { useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./UIVideo.module.css";

export default function UIVideo({ src, classes, playbackRate = 1.0 }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <div>
      <video
        loop
        autoPlay
        muted
        className={cn(styles.video, classes)}
        ref={videoRef}
      >
        <source src={src} />
      </video>
    </div>
  );
}
