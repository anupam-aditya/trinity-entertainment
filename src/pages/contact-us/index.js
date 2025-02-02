import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.addressDetails}>
          <div
            style={{
              width: "max-content",
              border: "1px solid #c0c0c0",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <h2 className={styles.heading}>Registered Address</h2>
            <p className={styles.address}>
              C-702, Silver Dunes,
              <br />
              Near Tata Press Lane,
              <br />
              Prabhadevi, Mumbai 25
            </p>
          </div>
          <div
            style={{
              width: "max-content",
              border: "1px solid #c0c0c0",
              borderRadius: "1rem",
              padding: "1rem",
            }}
          >
            <h2 className={styles.heading}>Office Address</h2>
            <p className={styles.address}>
              M001, Rajan House,
              <br />
              Shankar Ghanekar Rd, Century Bazaar,
              <br />
              Prabhadevi, Mumbai 25
            </p>
          </div>
        </div>
        <div>
          <p className={styles.email}>
            Email:{" "}
            <a href="mailto:info@trinityentertainment.in">
              info@trinityentertainment.in
            </a>
          </p>
        </div>
        <div className={styles.map}>
          <iframe
            title="Trinity Entertainment Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.059514192526!2d72.8258968!3d19.017098999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceb8ccfef6cd%3A0x60991b60a1f35e7c!2sTrinity%20Entertainment!5e0!3m2!1sen!2sin!4v1702556145989!5m2!1sen!2sin"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formHeading}>Let’s Start A Conversation</h2>
          <p className={styles.subHeading}>We’re Approachable!</p>

          <div className={styles.formField}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
