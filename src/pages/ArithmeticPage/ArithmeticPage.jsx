import React from "react";
import styles from "./ArithmeticPage.module.css";
// This path is also very important.
import Quiz from "../../components/Quiz/Quiz.jsx";

// Data for the Measurement Quiz
const arithmeticQuizData = [
  {
    question:
      "To convert a BIGGER unit to a SMALLER unit (like km to m), you should...",
    options: ["Multiply", "Divide", "Add", "Subtract"],
    correctAnswer: "Multiply",
    feedback:
      "Correct! You multiply because there are many small units inside one big unit.",
  },
  {
    question: "How many meters are in 12 kilometers?",
    options: ["120 m", "1,200 m", "12,000 m", "1.2 m"],
    correctAnswer: "12,000 m",
    feedback: "That's right! Since 1 km = 1000 m, you calculate 12 x 1000.",
  },
  {
    question:
      "To convert a SMALLER unit to a BIGGER unit (like grams to kg), you should...",
    options: ["Multiply", "Divide", "Add", "Subtract"],
    correctAnswer: "Divide",
    feedback:
      "You got it! You divide because you're figuring out how many big units the smaller units can make up.",
  },
  {
    question: "A snake is 725 centimeters long. How many meters long is it?",
    options: ["725 m", "72.5 m", "0.725 m", "7.25 m"],
    correctAnswer: "7.25 m",
    feedback: "Excellent! You divide 725 by 100 to convert from cm to m.",
  },
];

export default function ArithmeticPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Measurement Conversions</h1>
        <p className={styles.subtitle}>
          Learn how to switch between different units like a pro!
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Golden Rules 📜</h2>
        <div className={styles.rulesContainer}>
          <div className={`${styles.ruleCard} ${styles.ruleMultiply}`}>
            <h3>Bigger to Smaller: Multiply (x)</h3>
            <p>
              When you go from a large unit to a small one (like kilometers to
              meters), you **multiply**.
            </p>
          </div>
          <div className={`${styles.ruleCard} ${styles.ruleDivide}`}>
            <h3>Smaller to Bigger: Divide (÷)</h3>
            <p>
              When you go from a small unit to a large one (like centimeters to
              meters), you **divide**.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Common Conversions</h2>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Unit</th>
                <th>Is Equal To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length</td>
                <td>1 Kilometer (km)</td>
                <td>1000 Meters (m)</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>1 Meter (m)</td>
                <td>100 Centimeters (cm)</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>1 Kilogram (kg)</td>
                <td>1000 Grams (g)</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>1 Gram (g)</td>
                <td>1000 Milligrams (mg)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Quiz quizData={arithmeticQuizData} />
    </div>
  );
}
