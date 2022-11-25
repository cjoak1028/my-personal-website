import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <div id={styles["skills-title"]} className="flex flex-ai-c">
        <h2>Skills</h2>
        <hr />
      </div>
      <div id={styles["skills-list"]}>
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
      </div>
      <div className={styles["experience"]}>
        <div id={styles["flex-wrapper"]}>
          <h4 className={styles["experience-title"]}>
            Full-Stack Web Developer Intern
          </h4>
          <p className={styles["experience-date"]}>2017 - 2018</p>
        </div>
        <h5 className={styles["experience-company"]}>BioRender</h5>
        <p className={styles["experience-description"]}>
          Contributed to the development of a web application that helps people
          create beautiful scientific figures, diagrams, and illustrations.
        </p>
      </div>
    </div>
  );
};

export default Skills;
