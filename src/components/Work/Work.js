import React from "react";
import styles from "./Work.module.css";

import WorkCard from "./WorkCard";
import { WORK_DATA } from "../../data/workData";

const Work = () => {
  return (
    <div className={styles.work}>
      <div className="flex flex-ai-c mb-title">
        <h2>: my work</h2>
        {/* <hr /> */}
      </div>
      <div className={styles["work-gallery"]}>
        {WORK_DATA.map((data) => {
          return <WorkCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default Work;
