import React from "react";
import styles from "./Header.module.css";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div id={styles.header} className="flex flex-jc-sb flex-ai-c">
      <div id={styles["logo-container"]} className="flex flex-jc-c flex-ai-c">
        <p>CJ</p>
      </div>
      <Navigation />
      <MenuButton />
    </div>
  );
};

export default Header;
