import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import avatarImage from "../../assets/img/IMG_0570.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-text"]}>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          Yo, my name is
        </motion.h4>
        <h1>
          <span className={styles["first-name"]}>CJ </span>
          <span className={styles["name-divider"]}>/</span>
          <span className={styles["last-name"]}> KIM</span>
        </h1>
        <h3>
          I'm a{" "}
          <span className={styles["job-title"]}>Full-Stack Web Developer</span>{" "}
          based in Toronto, Canada.
        </h3>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        className={`flex flex-jc-c flex-ai-c ${styles["avatar-outline"]}`}
      >
        <div className={styles.avatar}>
          <img src={avatarImage} alt="CJ" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
