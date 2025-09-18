import React from "react";
import styles from "./TrianglesPage.module.css";
import Quiz from "../../components/Quiz/Quiz.jsx";
import InfoCard from "../../components/InfoCard/InfoCard.jsx";

const triangleQuizData = [
  {
    question: "A triangle with all three sides of equal length is called...",
    options: ["Isosceles", "Scalene", "Equilateral", "Right"],
    correctAnswer: "Equilateral",
    feedback: "Correct! 'Equi' means equal, and 'lateral' means side.",
  },
  {
    question: "If a triangle has two sides of equal length, what is it called?",
    options: ["Scalene", "Isosceles", "Acute", "Obtuse"],
    correctAnswer: "Isosceles",
    feedback: "That's right! An isosceles triangle has two equal sides.",
  },
  {
    question: "What is the total sum of all angles inside any triangle?",
    options: ["90°", "360°", "180°", "100°"],
    correctAnswer: "180°",
    feedback:
      "Excellent! The three angles in any triangle always add up to 180°.",
  },
  {
    question: "A triangle with one angle measuring exactly 90° is called a...",
    options: [
      "Acute triangle",
      "Obtuse triangle",
      "Right triangle",
      "Scalene triangle",
    ],
    correctAnswer: "Right triangle",
    feedback: "Perfect! That 90° angle is a 'right angle'.",
  },
];

export default function TrianglesPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>All About Triangles 🔺</h1>
        <p className={styles.subtitle}>
          A triangle is a polygon with 3 sides and 3 angles.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Triangles (by Sides)</h2>
        <div className={styles.grid}>
          <InfoCard title="Equilateral Triangle" color="green">
            All three sides are equal in length. All three angles are also equal
            (60° each).
          </InfoCard>
          <InfoCard title="Isosceles Triangle" color="blue">
            Has two sides of equal length. The angles opposite these sides are
            also equal.
          </InfoCard>
          <InfoCard title="Scalene Triangle" color="yellow">
            All three sides have different lengths. All three angles are also
            different.
          </InfoCard>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Triangles (by Angles)</h2>
        <div className={styles.grid}>
          <InfoCard title="Acute Triangle" color="purple">
            All three angles are 'acute' (less than 90°).
          </InfoCard>
          <InfoCard title="Right Triangle" color="red">
            Has one 'right' angle that is exactly 90°.
          </InfoCard>
          <InfoCard title="Obtuse Triangle" color="pink">
            Has one 'obtuse' angle that is greater than 90°.
          </InfoCard>
        </div>
      </section>

      <Quiz quizData={triangleQuizData} />
    </div>
  );
}
