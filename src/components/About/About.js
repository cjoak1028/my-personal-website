import React from "react";
import styles from "./About.module.css";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div id={styles.about}>
      <h2>I'm CJ</h2>
      <p>
        I survived U of T, endured tutorial hell, and built a number of things
        on the web.
      </p>
      <p>
        At the moment, my focus is on front-end development and creating the
        best user experience.
      </p>
      <a id={styles["work-link"]} className="flex flex-ai-c flex-jc-fe">
        Check out some of my work <BsArrowRight id={styles.arrow} />
      </a>
    </div>
  );
};

export default About;
