import React from "react";
import styles from "./WorkCard.module.css";
import { BiLinkExternal } from "react-icons/bi";

const WorkCard = ({ data }) => {
  return (
    <div className={`${styles["work-card"]} flex flex-d-c flex-jc-sb`}>
      <div>
        <h4>
          <span className={styles["work-id"]}>{data.id}.</span>{" "}
          <span className={styles["work-name"]}>{data.title}</span>
        </h4>
        <p className={styles["work-description"]}>{data.description}</p>
      </div>
      <div>
        <div className={styles["flex-wrapper"]}>
          <div className={`${styles["work-technologies"]} flex`}>
            {data.technologies.map((tech) => {
              return <p className={styles.tech}>{tech}</p>;
            })}
          </div>
          <div className={`${styles["work-links"]} flex flex-ai-c`}>
            <a href={data.repo} className={styles["work-link"]}>
              <img src="/assets/logos/github.png" alt="github logo" />
            </a>
            <a href={data.link} className={styles["work-link"]}>
              <BiLinkExternal
                className={styles["link-icon"]}
                color={"#373A3C"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
