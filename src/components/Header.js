import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div id={styles.header}>
      <div id={styles["logo-container"]} className="flex flex-jc-c flex-ai-c">
        <p>CJ</p>
      </div>
    </div>
  );
};

export default Header;
