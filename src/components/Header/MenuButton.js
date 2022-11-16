import React from "react";
import styles from './MenuButton.module.css';

const MenuButton = () => {
  return <div id={styles["menu-button"]} className="flex flex-d-c flex-jc-sb">
    <span></span>
    <span></span>
    <span></span>
  </div>;
};

export default MenuButton;
