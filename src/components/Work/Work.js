import React, { useEffect } from "react";
import styles from "./Work.module.css";
import WorkCard from "./WorkCard";
import { WORK_DATA } from "../../data/workData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const firstVariant = {
    visible: { opacity: 1, transition: { duration: 0.3 }, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const secondVariant = {
    visible: { opacity: 1, transition: { duration: 0.6 }, y: 0 },
    hidden: { opacity: 0, y: 70 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={styles.work}>
      <motion.h2
        ref={ref}
        variants={firstVariant}
        initial="hidden"
        animate={control}
        className="mb-title"
      >
        my work
      </motion.h2>
      <div
        className={styles["work-gallery"]}
      >
        {WORK_DATA.map((data, index) => {
          return <WorkCard data={data} delay={`0.${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Work;
