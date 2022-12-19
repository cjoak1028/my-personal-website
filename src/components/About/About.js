import React, { useEffect } from "react";
import styles from "./About.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const firstVariant = {
    visible: { opacity: 1, transition: { duration: 0.3 }, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const secondVariant = {
    visible: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const thirdVariant = {
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const fourthVariant = {
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const fifthVariant = {
    visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 }, x: 0 },
    hidden: { opacity: 0, x: 200 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={styles.about}>
      <motion.h2
        className="mb-title"
        ref={ref}
        variants={firstVariant}
        initial="hidden"
        animate={control}
      >
        about me
      </motion.h2>
      <motion.div
        ref={ref}
        variants={secondVariant}
        initial="hidden"
        animate={control}
        className={`${styles["first-paragraph"]} flex`}
      >
        <p>
          My name is <span className="c-accent">Chang-Ju</span> (but you can
          call me CJ), and I'm a{" "}
          <span className="c-accent">full-stack web developer</span> currently
          based in Toronto, Canada.
        </p>
      </motion.div>
      <motion.p
        ref={ref}
        variants={thirdVariant}
        initial="hidden"
        animate={control}
        className={styles["second-paragraph"]}
      >
        I pursued a degree in{" "}
        <span className="c-accent">
          Computer Science at the University of Toronto
        </span>
        . While there, I had the privilege of interning as a full-stack web
        developer at a start-up, where I discovered my passion for building
        things on the web.
      </motion.p>
      <motion.p
        ref={ref}
        variants={fourthVariant}
        initial="hidden"
        animate={control}
      >
        My eagerness to constantly be learning and improving myself has helped
        me endure countless online tutorials and complete fascinating projects.
        Currently, I am focused on the <span className="c-accent">front-end side of the web development
        spectrum</span>, experimenting with various tools and libraries to create
        awesome UI.
      </motion.p>
      <motion.div
        ref={ref}
        variants={fifthVariant}
        initial="hidden"
        animate={control}
        className={"flex flex-jc-fe"}
      >
        <Link
          smooth
          spy
          offset={-140}
          duration={500}
          to="work"
          className={`${styles["work-link"]} flex flex-ai-c`}
        >
          Check out some of my work <BsArrowRight className={styles.arrow} />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
