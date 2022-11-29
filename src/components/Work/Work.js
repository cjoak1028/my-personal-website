import React from "react";
import styles from "./Work.module.css";

import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div id={styles.work}>
      <div id={styles["work-title"]} className="flex flex-ai-c">
        <h2>WORK</h2>
        <hr />
      </div>
    </div>
  );
};

export default Work;
