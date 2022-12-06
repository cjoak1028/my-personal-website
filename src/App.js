import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";

function App() {
  const [mQuery, setMQuery] = useState({
    matches: window.matchMedia("(min-width: 37.5em)").matches,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 37.5em)");
    const handler = (e) => {
      setMQuery({ matches: e.matches });
    };
    if (mediaQuery?.addEventListener) {
      // For non-safari browsers
      mediaQuery.addEventListener("change", handler);
    } else {
      // For safari browsers
      mediaQuery.addListener(handler);
    }

    return () => {
      if (mediaQuery?.addEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return (
    <div>
      <Header mQuery={mQuery} />
      <div className="flex">
        <Sidebar />
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
            <div id={styles.links} className="flex flex-ai-c flex-jc-c">
              <span></span>
              <a href="https://github.com/cjoak1028">
                <img src="/assets/logos/github.png" alt="github logo" />
              </a>
              <a href="https://www.linkedin.com/in/cj-kim-966351255/">
                <img src="/assets/logos/linkedin.png" alt="linkedin logo" />
              </a>
              <span></span>
            </div>
            <p>Designed + Built by CJ KIM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
