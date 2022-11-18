import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div id={styles["app-container"]}>
        <div className={styles["section"]}>
          <Hero />
        </div>
        <span className={styles.divider}></span>
        <div className={styles["section"]}>
          <About />
        </div>
        <span className={styles.divider}></span>
        <div className={styles["section"]}>
          <Skills />
        </div>
        <span className={styles.divider}></span>
        <div className={styles["section"]}>
          <Work />
        </div>
        <span className={styles.divider}></span>
        <div className={styles["section"]}>
          <Contact />
        </div>
        <div id={styles.attribution}>
          <div id={styles.links}>
            <a href="https://github.com/cjoak1028">
              <img src="/assets/logos/github.png" alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/cj-kim-966351255/">
              <img src="/assets/logos/linkedin.png" alt="linkedin logo" />
            </a>
          </div>
          <p>Designed + Built by CJ KIM</p>
        </div>
      </div>
    </div>
  );
}

export default App;
