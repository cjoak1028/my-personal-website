import React from "react";
import styles from "./HamburgerMenu.module.css";
import resume from "../../assets/doc/resume.pdf";
import { Link } from "react-scroll";

const HamburgerMenu = ({ openMenu, setOpenMenu }) => {
  return (
    <nav className={`${styles["hamburger-menu"]} ${openMenu && styles.open}`}>
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <Link
            className={styles.link}
            smooth
            spy
            offset={-90}
            duration={500}
            to="about"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            about
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link
            className={styles.link}
            smooth
            spy
            offset={-90}
            duration={500}
            to="skills"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            skills
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link
            className={styles.link}
            smooth
            spy
            offset={-90}
            duration={500}
            to="work"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            work
          </Link>
        </li>
        <li className={styles["menu-item"]}>
          <Link
            className={styles.link}
            smooth
            spy
            offset={-90}
            duration={500}
            to="contact"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            contact
          </Link>
        </li>
        <li>
          <a
            className={styles["resume-btn"]}
            href={resume}
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
