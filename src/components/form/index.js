import { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ containerClass }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <section className={`${styles.container} ${containerClass}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
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
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="position">
              What position are you willing to apply?
            </label>
            <input
              type="email"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="cv">Upload Your CV</label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Apply Now
        </button>
      </form>
    </section>
  );
};

export default Form;
