import React from "react";
import styles from "../../styles/Home.module.css";

export default function HomeVideo() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className={styles.video}
        src={require("../../homepage.mp4")}
      />
    </div>
  );
}
