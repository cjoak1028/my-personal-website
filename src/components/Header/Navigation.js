import React from "react";
import styles from "./Navigation.module.css";
import resume from "../../assets/doc/resume.pdf";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={`${styles["navigation-list"]} flex flex-jc-sb flex-ai-c`}>
        <li>
          <a className={styles["section-link"]}>about</a>
        </li>
        <li>
          <a className={styles["section-link"]}>skills</a>
        </li>
        <li>
          <a className={styles["section-link"]}>work</a>
        </li>
        <li>
          <a className={styles["section-link"]}>contact</a>
        </li>
        <li>
          <a className={styles["resume-btn"]} href={resume}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
