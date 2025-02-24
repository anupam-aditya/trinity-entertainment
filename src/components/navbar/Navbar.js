import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const items = [
    { img: logo, url: "/" },
    { text: "About", url: "/about" },
    { text: "Services", url: "/services" },
    { text: "Work", url: "/work" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <a className={styles.navLink} href="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>
      </div>
      <div className={styles.desktopMenu}>
        <div className={styles.navLinks}>
          {items.slice(1).map((item) => (
            <a key={item.url} className={styles.navLink} href={item.url}>
              {item.text}
            </a>
          ))}
        </div>
        <div className={styles.navButtons}>
          <button className={styles.navbarButton}>
            <a href="/career">Careers</a>
          </button>
          <button className={styles.navbarButton}>
            <a href="/contact">Contact</a>
          </button>
        </div>
      </div>
      <div className={styles.mobileMenuButton}>
        <button onClick={toggleMobileMenu} className={styles.hamburger}>
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <button onClick={toggleMobileMenu} className={styles.closeButton}>
            &times;
          </button>
          <div className={styles.mobileMenuContent}>
            {items.map((item) => (
              <a
                key={item.url}
                className={styles.mobileNavLink}
                href={item.url}
                onClick={toggleMobileMenu}
              >
                {item?.text ? (
                  item.text
                ) : (
                  <img className={styles.logo} src={item?.img} alt="Logo" />
                )}
              </a>
            ))}
            <div className={styles.mobileNavButtons}>
              <button className={styles.navbarButton}>
                <a href="/career">Careers</a>
              </button>
              <button className={styles.navbarButton}>
                <a href="/contact">Contact</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
