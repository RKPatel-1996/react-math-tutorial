import React, { useState } from "react";
import styles from "./Header.module.css";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header({ navigateTo, currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add new pages to the navigation links
  const navLinks = [
    { id: "home", name: "Home" },
    { id: "geometry", name: "Geometry" },
    { id: "triangles", name: "Triangles" }, // New link
    { id: "circles", name: "Circles" }, // New link
    { id: "arithmetic", name: "Measurement" },
  ];

  const handleNavClick = (pageId) => {
    navigateTo(pageId);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>🚀 Math Adventures</div>

        <div className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`${styles.navLink} ${
                currentPage === link.id ? styles.active : ""
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className={styles.mobileMenuButtonContainer}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`${styles.mobileNavLink} ${
                currentPage === link.id ? styles.activeMobile : ""
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
