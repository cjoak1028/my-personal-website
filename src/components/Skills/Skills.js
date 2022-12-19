import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import { BiRightArrow } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const firstVariant = {
    visible: { opacity: 1, transition: { duration: 0.3 }, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const secondVariant = {
    visible: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const thirdVariant = {
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const fourthVariant = {
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={styles.skills}>
      <motion.h2
        ref={ref}
        variants={firstVariant}
        initial="hidden"
        animate={control}
        className="mb-title"
      >
        my skills
      </motion.h2>
      <div id={styles["skills-list"]}>
        <motion.p
          ref={ref}
          variants={secondVariant}
          initial="hidden"
          animate={control}
        >
          I have experience with the following technologies:
        </motion.p>
        <motion.ul
          id={styles["skills-list"]}
          ref={ref}
          variants={thirdVariant}
          initial="hidden"
          animate={control}
        >
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> HTML
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            CSS/SCSS/SASS
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            JavaScript (ES6+)
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            React/React Native
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> Node.js
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} />
            Express.js
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> MongoDB
          </li>
          <li className="flex flex-ai-c">
            <BiRightArrow className={styles.bullet} /> Python
          </li>
        </motion.ul>
      </div>
      <motion.div
        ref={ref}
        variants={fourthVariant}
        initial="hidden"
        animate={control}
        className={styles["experience"]}
      >
        <div id={styles["flex-wrapper"]}>
          <h4 className={styles["experience-title"]}>
            Full-Stack Web Developer Intern
          </h4>
          <p className={styles["experience-date"]}>2017 - 2018</p>
        </div>
        <h5 className={styles["experience-company"]}>BioRender</h5>
        <p className={styles["experience-description"]}>
          Contributed to the development of a web application that helps people
          create beautiful scientific figures, diagrams, and illustrations.
        </p>
      </motion.div>
    </div>
  );
};

export default Skills;
