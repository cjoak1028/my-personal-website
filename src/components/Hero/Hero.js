import React from "react";
import styles from "./Hero.module.css";
import avatarImage from "./assets/IMG_0570.jpg";

const Hero = () => {
  return (
    <div id={styles.hero}>
      <div id={styles["hero-text"]}>
        <h4>Yo, my name is</h4>
        <h1>CJ KIM</h1>
        <h3>I'm a Full-Stack Web Developer based in Toronto, Canada.</h3>
      </div>
      <div id={styles["avatar-outline"]} className="flex flex-jc-c flex-ai-c">
        <div id={styles.avatar}>
          <img src={avatarImage} alt="photo of CJ" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
