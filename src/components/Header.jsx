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

  // ✅ Close dropdown + menu after clicking a link
  const handleNavClick = () => {
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/img/logo_43.png" alt="" className={styles.logoImg} />
          <span> Constructions</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((p) => !p)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}
          ref={menuRef}
        >
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <a href="#gallery" onClick={handleNavClick}>Gallery</a>
          <a href="#about" onClick={handleNavClick}>About Us</a>
          <a href="#contact" onClick={handleNavClick}>Contact Us</a>

          {/* Dropdown */}
          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"   // ✅ prevents page jump
              className={styles.dropbtn}
              onClick={() => {
                console.log("Clicked Services!");
                setDropdownOpen((p) => !p);
              }}
            >
              Services ▾
            </button>
            <div
              className={`${styles.dropdownContent} ${
                dropdownOpen ? styles.show : ""
              }`}
            >
              <Link to="/construction" onClick={handleNavClick}>
                Construction
              </Link>
              <Link to="/interiors" onClick={handleNavClick}>
                Interiors
              </Link>
              <Link to="/vastu" onClick={handleNavClick}>
                Vastu
              </Link>
            </div>
          </div>
        </nav>

        {/* Search */}
        <div className={styles.searchContainer}>
          {/* <input type="text" placeholder="Search..." /> */}
          {/* <span className={styles.searchIcon}>🔍</span> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
