import React from "react";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <div>
      <h2>Some of my work</h2>
      <div id={styles["projects-gallery"]}>
        <div id={styles["project-1"]} className={styles.project}>
          <p>The Planets</p>
        </div>
        <div id={styles["project-2"]} className={styles.project}>
          <img src="/assets/logos/photosnap.svg" alt="photosnap logo" />
        </div>
        <div id={styles["project-3"]} className={styles.project}>
          <p>Memoire</p>
        </div>
        <div id={styles["project-4"]} className={styles.project}>
          <img src="/assets/logos/devjobs.svg" alt="devjobs logo" />
        </div>
      </div>
    </div>
  );
};

export default Work;
