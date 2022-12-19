import React from "react";
import styles from "./Hero.module.css";
import avatarImage from "../../assets/img/IMG_0570.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-text"]}>
        <motion.h4
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, transition: { duration: 0.8 }, x: 0 }}
        >
          <span className={styles["greeting"]}>Hello</span>, my name is
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
            x: 0,
          }}
        >
          <span className={styles["full-name"]}>
            <span className={styles["first-name"]}>CJ</span>
            <span className={styles["last-name"]}> KIM</span>
          </span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.8, delay: 0.3 },
            x: 0,
          }}
        >
          I'm a{" "}
          <span className={styles["job-title"]}>Full-Stack Web Developer</span>{" "}
          based in Toronto, Canada.
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
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
