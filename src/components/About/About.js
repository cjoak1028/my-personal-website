import React from "react";
import styles from "./About.module.css";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div id={styles.about}>
      <div id={styles["about-title"]} className="flex flex-ai-c">
        <h2>About</h2>
        <hr />
      </div>
      <p>My name is CJ.</p>
      <p>
        I'm a U of T survivor and I endured tutorial hell and built a number of
        things on the web.
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
