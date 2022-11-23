import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div id={styles.sidebar} className="flex-jc-c">
      <div id={styles["sidebar-content"]} className="flex flex-d-c flex-ai-c">
        <a href="https://github.com/cjoak1028">
          <img src="/assets/logos/github.png" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/cj-kim-966351255/">
          <img src="/assets/logos/linkedin.png" alt="linkedin logo" />
        </a>
        <span></span>
      </div>
    </div>
  );
};

export default Sidebar;
