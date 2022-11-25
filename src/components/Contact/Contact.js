import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id={styles.contact}>
      <div id={styles["contact-title"]} className="flex flex-ai-c">
        <h2>Contact Me</h2>
        <hr />
      </div>
      <p>
        I’m currently searching for opportunities where I can test my skills and
        knowledge in web development all the while meeting new people and having
        fun!
      </p>
      <form id={styles["contact-form"]}>
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea id="message" name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
