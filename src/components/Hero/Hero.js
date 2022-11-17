import React from "react";
import styles from "./Hero.module.css";
import avatarImage from "./assets/IMG_0570.jpg";

const Hero = () => {
  return (
    <div id={styles.hero}>
      <h1>Yo.</h1>
      <h3>I'm a Web Developer based in Toronto, Canada.</h3>
      <div id={styles["avatar-outline"]} className="flex flex-jc-c flex-ai-c">
        <div id={styles.avatar}>
          <img src={avatarImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
