import React, { useState } from "react";
import "./question.css";

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "Rome", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
      "Charles Dickens",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for Gold?",
    choices: ["Au", "Ag", "Gd", "Go"],
    correctAnswer: "Au",
  },
];

const Question = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleAnswer = (choice) => {
    setSelected(choice);
    if (choice === questions[current].correctAnswer) {
      setScore(score + 1);
      setFeedback(" Correct!");
    } else {
      setFeedback(` Wrong Correct answer: ${questions[current].correctAnswer}`);
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setFeedback("");
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="score-card">
          <h2>
            Your score is {score} out of {questions.length}
          </h2>
        </div>
      ) : (
        <div className="card">
          <h3 className="question-text">{questions[current].question}</h3>
          <div className="choices">
            {questions[current].choices.map((choice, index) => {
              let className = "choice-button";

              if (selected) {
                if (choice === questions[current].correctAnswer) {
                  className += " correct";
                } else if (choice === selected) {
                  className += " wrong";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(choice)}
                  disabled={!!selected}
                  className={className}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          {feedback && <p className="feedback">{feedback}</p>}
          {selected && (
            <button onClick={handleNext} className="next-button">
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Question;
