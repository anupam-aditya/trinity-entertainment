import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import SvgWrapper from "../common/svgWrapper/svgWrapper";

const Footer = () => {
  const items = [
    { text: "Home", url: "/home" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Work", url: "/work" },
    { text: "Careers", url: "/careers" },
    { text: "Contact", url: "/contact" },
    { text: "ETERNITYBYTRINITY", url: "https://eternitybytrinity.com" },
  ];

  const contactInfo = [
    {
      icon: "location",
      heading: "Registered Address",
      text: "C-702, Silver Dunes, Near Tata Press Lane, Prabhadevi, Mumbai 25",
      column: 1,
    },
    {
      icon: "location",
      heading: "Office Address",
      text: "M001, Rajan House, Shankar Ghanekar Rd, Century Bazaar, Prabhadevi, Mumbai 25",
      column: 1,
    },
    {
      icon: "mail",
      heading: "Mailing Address",
      text: "info@trinityentertainment.in",
      column: 2,
    },
  ];
  const socialInfo = [
    {
      icon: "instagram",
      heading: "Registered Address",
      text: "C-702, Silver Dunes, Near Tata Press Lane, Prabhadevi, Mumbai 25",
      column: 1,
    },
    {
      icon: "linkedin",
      heading: "Office Address",
      text: "M001, Rajan House, Shankar Ghanekar Rd, Century Bazaar, Prabhadevi, Mumbai 25",
      column: 1,
    },
    {
      icon: "facebook",
      heading: "Mailing Address",
      text: "info@trinityentertainment.in",
      column: 2,
    },
  ];
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <img className={styles.footerLogo} src={logo} alt="Trinity Logo" />
        <div className={styles.footerNavLinks}>
          {items.map((item) => (
            <a key={item.url} className={styles.navLink} href={item.url}>
              {item.text}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.companyInfoSection}>
        <div className={styles.companyContactSection}>
          {contactInfo.map((info, index) => (
            <div key={info.heading} className={styles.companyContactInfo}>
              <div className={styles.addressIconSection}>
                <SvgWrapper svgSrc={info.icon} />
              </div>
              <div className={styles.addressInformationSection}>
                <p className={styles.addressHeading}>{info.heading}</p>
                <p className={styles.addressRegularText}>{info.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.companySocialInfo}>
          <div className={styles.companySocialLinks}>
            {socialInfo.map((info) => (
              <SvgWrapper
                className={styles.svgBackgroundFill}
                svgSrc={info?.icon}
              />
            ))}
          </div>
          <button className={styles.contactUsButton}>
            Get in touch with us
            <SvgWrapper svgSrc="arrow" />
          </button>
          {/* <div className={styles.companySocialLinks}></div> */}
          {/* Social media links will go here */}
        </div>
      </div>
      <p className={styles.rightsText}>
        © 2024 Trinity Entertainment & Strategic Consultants LLP. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
