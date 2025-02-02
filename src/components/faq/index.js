"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";

const FAQItem = ({
  id,
  question,
  isOpen = false,
  answer,
  toggleOpen = () => {},
}) => {
  const isActive = id === isOpen;
  return (
    <li className={styles.faqItem}>
      <div
        className={styles.faqQuestion}
        onClick={() => {
          toggleOpen(id);
        }}
      >
        <h3>{question}</h3>
        <div className={`${styles.icon} ${isActive ? styles.iconOpen : ""}`}>
          +
        </div>
      </div>
      <div
        className={`${styles.faqAnswer} ${
          isActive ? styles.faqAnswerOpen : ""
        }`}
      >
        <p className={styles.faqAnswerContent}>{answer}</p>
      </div>
    </li>
  );
};

const FAQ = ({ title, faqs }) => {
  const [isOpen, setIsOpen] = useState(null);
  const toggleOpen = (index) => {
    if (index !== isOpen) setIsOpen(index);
    else setIsOpen(null);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{title}</h2>
      <ul className={styles.faqList}>
        {faqs.map((faq, index) => (
          <FAQItem
            id={index}
            key={index}
            question={faq.question}
            answer={faq.answer}
            toggleOpen={toggleOpen}
            isOpen={isOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
