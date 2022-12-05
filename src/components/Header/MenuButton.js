import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = ({ openMenu, setOpenMenu }) => {
  return (
    <div
      className={`${styles["menu-button"]} ${openMenu ? styles.open : ""}`}
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MenuButton;
