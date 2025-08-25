import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains(styles.hamburger)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src="/img/logo_43.png" alt="" className={styles.logoImg} />
          <span> Constructions</span>
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen((p) => !p)}>☰</button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`} ref={menuRef}>
          <Link to="/">Home</Link>
          <a href="#gallery">Gallery</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>

          <div className={styles.dropdown} ref={dropdownRef}>
            <button className={styles.dropbtn} onClick={() => setDropdownOpen((p) => !p)}>
              Services ▾
            </button>
            <div className={`${styles.dropdownContent} ${dropdownOpen ? styles.show : ""}`}>
              <Link to="/construction">Construction</Link>
              <Link to="/interiors">Interiors</Link>
              <Link to="/interiors">Vastu</Link>
            </div>
          </div>
        </nav>

        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
