import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <h2>What I can do</h2>
      <p>I have experience with the following technologies:</p>
      <ul id={styles["skills-list"]}>
        <li>
          <span>&gt;</span> HTML
        </li>
        <li>
          <span>&gt;</span> CSS/SCSS/SASS
        </li>
        <li>
          <span>&gt;</span> JavaScript (ES6+)
        </li>
        <li>
          <span>&gt;</span> React/React Native
        </li>
        <li>
          <span>&gt;</span> Node.js
        </li>
        <li>
          <span>&gt;</span> Express.js
        </li>
        <li>
          <span>&gt;</span> MongoDB
        </li>
        <li>
          <span>&gt;</span> Python
        </li>
      </ul>
      <div className={styles["experience"]}>
        <h4 className={styles["experience-title"]}>
          Full-Stack Web Developer Intern
        </h4>
        <p className={styles["experience-date"]}>2017 - 2018</p>
        <h5 className={styles["experience-company"]}>BioRender</h5>
        <p className={styles["experience-description"]}>
          Helped build a web application that helps people create beautiful
          scientific figures, diagrams, and illustrations.
        </p>
      </div>
    </div>
  );
};

export default Skills;