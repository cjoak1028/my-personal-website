import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id={styles.contact}>
      <h2>Say hi!</h2>
      <p>
        I’m actively searching for opportunities to apply my skills and
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
