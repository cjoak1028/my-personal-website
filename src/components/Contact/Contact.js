import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const firstVariant = {
    visible: { opacity: 1, transition: { duration: 0.3 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const secondVariant = {
    visible: { opacity: 1, transition: { duration: 0.4 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
  const thirdVariant = {
    visible: { opacity: 1, transition: { duration: 0.4, delay: 0.1 }, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className={styles.contact}>
      <motion.h2
        ref={ref}
        variants={firstVariant}
        initial="hidden"
        animate={control}
        className={`${styles["contact-title"]} mb-title`}
      >
        MESSAGE ME
      </motion.h2>
      <div className={styles["form-container"]}>
        <motion.form
          ref={ref}
          variants={thirdVariant}
          initial="hidden"
          animate={control}
          id="contactForm"
          className={styles["contact-form"]}
        >
          <div className={styles["flex-wrapper"]}>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
          />
          <textarea id="message" name="message" placeholder="Message" />
          <button className={styles["submit-btn"]} type="submit">
            Send
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
