import React from "react";
import styles from "./CirclesPage.module.css";
import Quiz from "../../components/Quiz/Quiz.jsx";
import InfoCard from "../../components/InfoCard/InfoCard.jsx";

const circleQuizData = [
  {
    question:
      "The distance from the center of a circle to any point on its edge is the...",
    options: ["Diameter", "Radius", "Chord", "Circumference"],
    correctAnswer: "Radius",
    feedback: "Correct! The radius is half of the diameter.",
  },
  {
    question:
      "A line segment that passes through the center of a circle and has both endpoints on the circle is the...",
    options: ["Radius", "Arc", "Diameter", "Tangent"],
    correctAnswer: "Diameter",
    feedback: "Exactly! The diameter is the longest chord in a circle.",
  },
  {
    question:
      "What is the name for the distance around the outside of a circle?",
    options: ["Area", "Circumference", "Diameter", "Radius"],
    correctAnswer: "Circumference",
    feedback: "Great job! Circumference is like the perimeter of a circle.",
  },
  {
    question:
      "A line segment whose endpoints both lie on the circle is called a...",
    options: ["Radius", "Diameter", "Chord", "Secant"],
    correctAnswer: "Chord",
    feedback:
      "That's right! A diameter is a special type of chord that passes through the center.",
  },
];

export default function CirclesPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Exploring Circles ⚪</h1>
        <p className={styles.subtitle}>
          Let's learn about the parts of a circle.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Parts of a Circle</h2>
        <div className={styles.grid}>
          <InfoCard title="Center" color="blue">
            The single point right in the middle, from which all points on the
            circle are an equal distance.
          </InfoCard>
          <InfoCard title="Radius" color="green">
            The distance from the center to any point on the circle's edge.
          </InfoCard>
          <InfoCard title="Diameter" color="yellow">
            The distance across the circle, passing through the center. It's
            always twice the length of the radius.
          </InfoCard>
          <InfoCard title="Circumference" color="purple">
            The total distance around the outside of the circle. It's like the
            circle's perimeter.
          </InfoCard>
          <InfoCard title="Chord" color="red">
            A line segment that connects two points on the circle's edge. The
            diameter is the longest possible chord.
          </InfoCard>
          <InfoCard title="Arc" color="pink">
            A small section or part of the circumference (the edge of the
            circle).
          </InfoCard>
        </div>
      </section>

      <Quiz quizData={circleQuizData} />
    </div>
  );
}
