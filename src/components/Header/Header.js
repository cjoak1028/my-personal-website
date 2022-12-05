import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ mQuery }) => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log("mQuery changed!");
    if (mQuery.matches) {
      setOpenMenu(false);
    }
  }, [mQuery]);

  useEffect(() => {
    openMenu
      ? document.body.classList.add("scroll-lock")
      : document.body.classList.remove("scroll-lock");
  }, [openMenu]);

  return (
    <div className={`${styles.header} flex flex-jc-sb flex-ai-c`}>
      <div
        className={`${styles["logo-container"]} ${
          openMenu ? styles.open : ""
        } flex flex-jc-c flex-ai-c`}
      >
        <p>CJ</p>
      </div>
      {mQuery.matches ? (
        <Navigation />
      ) : (
        <MenuButton
          openMenu={openMenu}
          setOpenMenu={(open) => {
            setOpenMenu(open);
          }}
        />
      )}
      <HamburgerMenu openMenu={openMenu} />
    </div>
  );
};

export default Header;
