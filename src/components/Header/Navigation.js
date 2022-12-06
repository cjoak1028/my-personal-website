import React from "react";
import styles from "./Navigation.module.css";
import resume from "../../assets/doc/resume.pdf";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={`${styles["navigation-list"]} flex flex-jc-sb flex-ai-c`}>
        <li>
          <Link
            className={styles["section-link"]}
            activeClass="active"
            smooth
            spy
            offset={-295}
            duration={500}
            to="about"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            className={styles["section-link"]}
            smooth
            spy
            offset={-295}
            duration={500}
            to="skills"
          >
            skills
          </Link>
        </li>
        <li>
          <Link
            className={styles["section-link"]}
            smooth
            spy
            offset={-295}
            duration={500}
            to="work"
          >
            work
          </Link>
        </li>
        <li>
          <Link
            className={styles["section-link"]}
            smooth
            spy
            offset={-295}
            duration={500}
            to="contact"
          >
            contact
          </Link>
        </li>
        <li>
          <a className={styles["resume-btn"]} href={resume}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
