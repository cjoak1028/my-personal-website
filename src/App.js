import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

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
        <div className={styles["app-container"]}>
          <section className={styles["hero-section"]}>
            <Hero />
          </section>
          <span className={styles.divider}></span>
          <section id="about" className={styles["section"]}>
            <About />
          </section>
          <span className={styles.divider}></span>
          <section id="skills" className={styles["section"]}>
            <Skills />
          </section>
          <span className={styles.divider}></span>
          <section id="work" className={styles["section"]}>
            <Work />
          </section>
          <span className={styles.divider}></span>
          <section id="contact" className={styles["section"]}>
            <Contact />
          </section>
          <div className={styles.attribution}>
            <div className={`${styles.links} flex flex-ai-c flex-jc-c`}>
              <a href="https://github.com/cjoak1028">
                <BsGithub className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/cj-kim-966351255/">
                <BsLinkedin className={styles.icon} />
              </a>
            </div>
            <p>Designed + Built by CJ KIM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
