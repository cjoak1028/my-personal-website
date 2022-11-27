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
        * I’m actively searching for new opportunities, so feel free to contact
        me!
      </p>
      <form id={styles["contact-form"]}>
        <div id={styles["flex-wrapper"]}>
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <input type="text" id="subject" name="subject" placeholder="Subject" />
        <textarea id="message" name="message" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
