import React from "react";
import styles from "./Sidebar.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div id={styles.sidebar} className="flex-jc-c">
      <div id={styles["sidebar-content"]} className="flex flex-d-c flex-ai-c">
        <a className={styles.link} href="https://github.com/cjoak1028">
          <BsGithub size={24} className={styles.icon} />
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/cj-kim-966351255/"
        >
          <BsLinkedin size={24} className={styles.icon} />
        </a>
        <span></span>
      </div>
    </div>
  );
};

export default Sidebar;
