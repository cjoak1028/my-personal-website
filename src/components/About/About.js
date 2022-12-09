import React from "react";
import styles from "./About.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="flex flex-ai-c mb-title">
        <h2>ABOUT ME</h2>
        <hr />
      </div>
      <div className={`${styles["first-paragraph"]} flex`}>
        <span></span>
        <p>
          Hello! My name is Chang-Ju (but you can call me CJ), and I'm a
          full-stack web developer currently based in Toronto, Canada.
        </p>
      </div>
      <p className={styles["second-paragraph"]}>
        I pursued a degree in Computer Science at the University of Toronto.
        While there, I had the privilege of interning as a full-stack web
        developer at a start-up, where I discovered my passion for building
        things on the web.
      </p>
      <p>
        My eagerness to constantly be learning and improving myself has helped
        me endure countless online tutorials and complete fascinating projects.
        Currently, I am focused on the front-end side of the web development
        spectrum, experimenting with various tools and libraries that help me
        create awesome UI.
      </p>
      <Link
        smooth
        spy
        offset={-140}
        duration={500}
        to="work"
        className={`${styles["work-link"]} flex flex-ai-c flex-jc-fe`}
      >
        Check out some of my work <BsArrowRight className={styles.arrow} />
      </Link>
    </div>
  );
};

export default About;
