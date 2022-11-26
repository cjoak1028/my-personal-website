import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav id={styles.navigation}>
      <ul className="flex flex-jc-sb flex-ai-c">
        <li>
          <a>about</a>
        </li>
        <li>
          <a>skills</a>
        </li>
        <li>
          <a>work</a>
        </li>
        <li>
          <a>contact</a>
        </li>
        <li>
          <button>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
