import React from "react";
import styles from "./Skills.module.css";
import { BiRightArrow } from "react-icons/bi";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <div id={styles["skills-title"]} className="flex flex-ai-c mb-title">
        <h2>MY SKILLS</h2>
        <hr />
      </div>
      <div id={styles["skills-list"]}>
        <p>I have experience with the following technologies:</p>
        <ul id={styles["skills-list"]}>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> HTML
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            CSS/SCSS/SASS
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            JavaScript (ES6+)
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            React/React Native
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> Node.js
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            Express.js
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> MongoDB
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> Python
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
