import React from "react";
import styles from "./Hero.module.css";
import avatarImage from "../../assets/img/IMG_0570.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["hero-text"]}>
        <h4>Yo, my name is</h4>
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
      <div className={`flex flex-jc-c flex-ai-c ${styles["avatar-outline"]}`}>
        <div className={styles.avatar}>
          <img src={avatarImage} alt="CJ" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
