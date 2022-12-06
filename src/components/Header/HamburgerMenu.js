import React from "react";
import styles from "./HamburgerMenu.module.css";
import Navigation from "./Navigation";

const HamburgerMenu = ({ openMenu }) => {
  return (
    <div
      className={`${styles["hamburger-menu"]} ${openMenu && styles.open}`}
    ></div>
  );
};

export default HamburgerMenu;
