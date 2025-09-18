import React from "react";
import styles from "./GeometryPage.module.css";
// This import path is crucial. It goes up two levels from the current folder.
import Quiz from "../../components/Quiz/Quiz.jsx";

// Data for the Geometry Quiz
const geometryQuizData = [
  {
    question: "What is a location in space with no size?",
    options: ["A line", "A point", "A ray", "A segment"],
    correctAnswer: "A point",
    feedback: "Correct! A point just defines a location.",
  },
  {
    question: "A part of a line with two fixed end points is called a...",
    options: ["Ray", "Line", "Line Segment", "Vertex"],
    correctAnswer: "Line Segment",
    feedback: "Great job! A line segment has a definite beginning and end.",
  },
  {
    question:
      "Which type of lines never meet, no matter how far they are extended?",
    options: ["Perpendicular", "Intersecting", "Parallel", "Curved"],
    correctAnswer: "Parallel",
    feedback: "Exactly! Parallel lines are always the same distance apart.",
  },
  {
    question: "When two lines meet and form a 90° angle, they are...",
    options: [
      "Parallel lines",
      "Perpendicular lines",
      "Intersecting lines",
      "Ray lines",
    ],
    correctAnswer: "Perpendicular lines",
    feedback: "Perfect! Perpendicular lines form right angles.",
  },
];

export default function GeometryPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Geometry Basics</h1>
        <p className={styles.subtitle}>
          Let's explore the world of shapes, points, and lines.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Building Blocks</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <h3>Point</h3>
            <p>
              A point is a location in space. It has no size. We show it with a
              dot.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <h3>Line</h3>
            <p>
              A straight path of points that goes on forever in both directions.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardPurple}`}>
            <h3>Line Segment</h3>
            <p>
              A part of a line with two endpoints. It has a definite, measurable
              length.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardTeal}`}>
            <h3>Ray</h3>
            <p>Starts at one endpoint and goes on forever in one direction.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Lines</h2>
        <div className={styles.lineTypesContainer}>
          <div className={styles.lineType}>
            <h3>Parallel Lines</h3>
            <p>
              These lines are always the same distance apart and never meet,
              like railroad tracks.
            </p>
          </div>
          <div className={styles.lineType}>
            <h3>Intersecting Lines</h3>
            <p>These are lines that cross each other at a single point.</p>
          </div>
          <div className={styles.lineType}>
            <h3>Perpendicular Lines</h3>
            <p>
              These special lines intersect to form a perfect right angle (90°).
            </p>
          </div>
        </div>
      </section>

      <Quiz quizData={geometryQuizData} />
    </div>
  );
}
