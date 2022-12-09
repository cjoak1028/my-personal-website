import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="flex flex-ai-c mb-title">
        <h2 className={styles["contact-title"]}>CONTACT ME !</h2>
        {/* <hr /> */}
      </div>
      <div className={styles["form-container"]}>
        <p>I’m looking for new opportunities, so feel free to contact me!</p>
        <form id="contactForm" className={styles["contact-form"]}>
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
