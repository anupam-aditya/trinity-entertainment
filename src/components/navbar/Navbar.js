import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const items = [
    { text: logo, url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Work", url: "/work" },
  ];
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navLinks}>
        {items.map((item) => {
          if (item?.text?.includes("logo"))
            return (
              <a key={item?.url} className={styles.navLink} href={item?.url}>
                <img className={styles.logo} src={item?.text} alt="Logo" />
              </a>
            );
          return (
            <a key={item?.url} className={styles.navLink} href={item?.url}>
              {item?.text}
            </a>
          );
        })}
      </div>
      <div className={styles.navButtons}>
        <button className={`${styles.navbarButton}`}>
          <a href="/career">Careers</a>
        </button>
        <button className={`${styles.navbarButton}`}>
          <a href="/contact">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
