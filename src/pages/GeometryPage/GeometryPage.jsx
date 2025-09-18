import React from "react";
import styles from "./GeometryPage.module.css";
import Quiz from "../../components/Quiz/Quiz.jsx";

const geometryQuizData = [
  {
    question: "What is the tip of a pencil like?",
    options: ["A line", "A point", "A ray", "A segment"],
    correctAnswer: "A point",
    feedback: "Correct! The very tip is like a single location, or a point.",
  },
  {
    question:
      "A part of a line with a start and an end, like a ruler, is called a...",
    options: ["Ray", "Line", "Line Segment", "Vertex"],
    correctAnswer: "Line Segment",
    feedback:
      "Great job! A ruler is a perfect example of a line segment because it has a clear start and end.",
  },
  {
    question: "Which of these is most like a beam of light from a flashlight?",
    options: ["A line", "A ray", "A line segment", "An angle"],
    correctAnswer: "A ray",
    feedback:
      "Exactly! It starts at the flashlight (an endpoint) and goes on and on in one direction.",
  },
  {
    question: "Railway tracks are a great example of...",
    options: [
      "Perpendicular lines",
      "Intersecting lines",
      "Parallel lines",
      "Curved lines",
    ],
    correctAnswer: "Parallel lines",
    feedback:
      "Perfect! They always stay the same distance apart and never cross.",
  },
];

export default function GeometryPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Geometry is Everywhere!</h1>
        <p className={styles.subtitle}>
          Let's discover the secret building blocks of the world around us.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Building Blocks</h2>

        {/* Point */}
        <div className={styles.conceptCard}>
          <div className={styles.visual}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="5" fill="#3b82f6" />
              <text
                x="50"
                y="75"
                textAnchor="middle"
                className={styles.svgText}
              >
                A
              </text>
            </svg>
          </div>
          <div className={styles.explanation}>
            <h3>A Point</h3>
            <p className={styles.analogy}>
              <strong>Think of it like:</strong> The tiny dot a sharp pencil
              makes, or a single star in the night sky.
            </p>
            <p>
              A point is the simplest shape in geometry. It marks an exact
              location but has no size—it's just a position.
            </p>
            <p className={styles.example}>
              <strong>Where you can see it:</strong> The corner of a book, a
              seed in the ground, or a dot on a map.
            </p>
          </div>
        </div>

        {/* Line Segment */}
        <div className={styles.conceptCard}>
          <div className={styles.visual}>
            <svg viewBox="0 0 100 100">
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#10b981"
                strokeWidth="4"
              />
              <circle cx="10" cy="50" r="5" fill="#10b981" />
              <circle cx="90" cy="50" r="5" fill="#10b981" />
              <text
                x="10"
                y="75"
                textAnchor="middle"
                className={styles.svgText}
              >
                A
              </text>
              <text
                x="90"
                y="75"
                textAnchor="middle"
                className={styles.svgText}
              >
                B
              </text>
            </svg>
          </div>
          <div className={styles.explanation}>
            <h3>A Line Segment</h3>
            <p className={styles.analogy}>
              <strong>Think of it like:</strong> A ruler, a pencil, or a
              straight twig.
            </p>
            <p>
              A line segment is a straight path between two specific points. It
              has a beginning and an end, so you can measure its length.
            </p>
            <p className={styles.example}>
              <strong>Where you can see it:</strong> The edge of a table, a
              stretched-out string, or one side of a square.
            </p>
          </div>
        </div>

        {/* Ray */}
        <div className={styles.conceptCard}>
          <div className={styles.visual}>
            <svg viewBox="0 0 100 100">
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
                </marker>
              </defs>
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#8b5cf6"
                strokeWidth="4"
                markerEnd="url(#arrow)"
              />
              <circle cx="10" cy="50" r="5" fill="#8b5cf6" />
              <text
                x="10"
                y="75"
                textAnchor="middle"
                className={styles.svgText}
              >
                Start
              </text>
            </svg>
          </div>
          <div className={styles.explanation}>
            <h3>A Ray</h3>
            <p className={styles.analogy}>
              <strong>Think of it like:</strong> A beam of light from a
              flashlight.
            </p>
            <p>
              A ray starts at one point (called an endpoint) and continues on
              forever in one direction. It has a start but no end!
            </p>
            <p className={styles.example}>
              <strong>Where you can see it:</strong> Sunbeams shining from the
              sun, or an arrow shot from a bow.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Types of Lines</h2>

        {/* Parallel Lines */}
        <div className={styles.conceptCard}>
          <div className={styles.visual}>
            <svg viewBox="0 0 100 100">
              <line
                x1="10"
                y1="35"
                x2="90"
                y2="35"
                stroke="#ef4444"
                strokeWidth="4"
              />
              <line
                x1="10"
                y1="65"
                x2="90"
                y2="65"
                stroke="#ef4444"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className={styles.explanation}>
            <h3>Parallel Lines</h3>
            <p className={styles.analogy}>
              <strong>Think of them like:</strong> Railroad tracks.
            </p>
            <p>
              Parallel lines are two lines that are always the same distance
              apart. They never, ever cross, no matter how far you extend them.
            </p>
            <p className={styles.example}>
              <strong>Where you can see them:</strong> The sides of a ladder,
              the lines on notebook paper, or shelves on a bookshelf.
            </p>
          </div>
        </div>

        {/* Perpendicular Lines */}
        <div className={styles.conceptCard}>
          <div className={styles.visual}>
            [Image of a plus sign]
            <svg viewBox="0 0 100 100">
              <line
                x1="10"
                y1="50"
                x2="90"
                y2="50"
                stroke="#ec4899"
                strokeWidth="4"
              />
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="90"
                stroke="#ec4899"
                strokeWidth="4"
              />
              <rect
                x="50"
                y="50"
                width="10"
                height="10"
                fill="none"
                stroke="#ec4899"
                strokeWidth="2"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <div className={styles.explanation}>
            <h3>Perpendicular Lines</h3>
            <p className={styles.analogy}>
              <strong>Think of them like:</strong> The corner of a square or a
              plus sign (+).
            </p>
            <p>
              Perpendicular lines are special lines that intersect to form a
              perfect 90-degree angle, also called a "right angle".
            </p>
            <p className={styles.example}>
              <strong>Where you can see them:</strong> The corners of a window,
              where a wall meets the floor, or the cross on a first-aid kit.
            </p>
          </div>
        </div>
      </section>

      <Quiz quizData={geometryQuizData} />
    </div>
  );
}
