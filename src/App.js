import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles["padding-main"]}>
        <div className={styles["section"]}>
          <Hero />
        </div>
      </div>
      <span className={styles.divider}></span>
    </div>
  );
}

export default App;
