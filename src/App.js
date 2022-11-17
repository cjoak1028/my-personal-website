import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
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
      </div>
    </div>
  );
}

export default App;
