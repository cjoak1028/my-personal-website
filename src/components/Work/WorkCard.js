import React, { useEffect } from "react";
import styles from "./WorkCard.module.css";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkCard = ({ data, delay }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const variant = {
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delay: Number(delay) },
      y: 0,
    },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
      className={`${styles["work-card"]} flex flex-d-c flex-jc-sb`}
    >
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
            {data.repo === "" ? (
              <a href={data.repo} className={`${styles["work-link"]} disabled`}>
                <BsGithub className={styles["github-icon"]} color="#DCDCDC" />
              </a>
            ) : (
              <a href={data.repo} className={`${styles["work-link"]}`}>
                <BsGithub className={styles["github-icon"]} />
              </a>
            )}
            {data.link === "" ? (
              <a href={data.link} className={`${styles["work-link"]} disabled`}>
                <BiLinkExternal
                  className={styles["link-icon"]}
                  color="#DCDCDC"
                />
              </a>
            ) : (
              <a href={data.link} className={`${styles["work-link"]}`}>
                <BiLinkExternal className={styles["link-icon"]} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
