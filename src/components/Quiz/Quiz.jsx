import React, { useState } from "react";
import styles from "./Quiz.module.css";

// SVG Icons for feedback
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
const XCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={styles.icon}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Quiz({ quizData }) {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionChange = (questionIndex, option) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [questionIndex]: option });
  };

  const handleSubmit = () => setIsSubmitted(true);
  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return score + (answers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <section className={styles.quizContainer}>
      <h2 className={styles.quizTitle}>Check Your Knowledge! 🧠</h2>
      <div className={styles.quizBox}>
        {quizData.map((item, index) => (
          <div key={index} className={styles.questionBlock}>
            <p className={styles.questionText}>
              {index + 1}. {item.question}
            </p>
            <div className={styles.optionsGrid}>
              {item.options.map((option) => {
                const isSelected = answers[index] === option;
                let buttonClass = styles.optionButton;
                if (isSubmitted) {
                  if (option === item.correctAnswer) {
                    buttonClass = `${styles.optionButton} ${styles.correct}`;
                  } else if (isSelected) {
                    buttonClass = `${styles.optionButton} ${styles.incorrect}`;
                  }
                } else if (isSelected) {
                  buttonClass = `${styles.optionButton} ${styles.selected}`;
                }
                return (
                  <button
                    key={option}
                    onClick={() => handleOptionChange(index, option)}
                    className={buttonClass}
                    disabled={isSubmitted}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {isSubmitted && answers[index] && (
              <div
                className={`${styles.feedbackBox} ${
                  answers[index] === item.correctAnswer
                    ? styles.feedbackCorrect
                    : styles.feedbackIncorrect
                }`}
              >
                {answers[index] === item.correctAnswer ? (
                  <CheckCircleIcon />
                ) : (
                  <XCircleIcon />
                )}
                <span>{item.feedback}</span>
              </div>
            )}
          </div>
        ))}
        {!isSubmitted ? (
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit Answers
          </button>
        ) : (
          <div className={styles.resultsContainer}>
            <p className={styles.scoreText}>
              You scored {calculateScore()} out of {quizData.length}!
            </p>
            <button onClick={handleReset} className={styles.resetButton}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
