import React from "react";
import styles from "./HomePage.module.css";

export default function HomePage({ navigateTo }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Math Adventures! ✨</h1>
      <p className={styles.subtitle}>
        Choose a topic below to start your learning journey.
      </p>

      <div className={styles.cardContainer}>
        <div
          onClick={() => navigateTo("geometry")}
          className={`${styles.card} ${styles.geometryCard}`}
        >
          <h2 className={styles.cardTitle}>Geometry</h2>
          <p className={styles.cardText}>Explore shapes, lines, and angles!</p>
        </div>
        <div
          onClick={() => navigateTo("arithmetic")}
          className={`${styles.card} ${styles.arithmeticCard}`}
        >
          <h2 className={styles.cardTitle}>Measurement</h2>
          <p className={styles.cardText}>Learn about converting units.</p>
        </div>
      </div>
    </div>
  );
}
