import React from "react";
import styles from "./InfoCard.module.css";

export default function InfoCard({ title, children, color = "blue" }) {
  // This combines the base card style with a specific color style
  const cardClassName = `${styles.card} ${styles[color]}`;

  return (
    <div className={cardClassName}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
