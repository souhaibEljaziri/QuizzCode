
import React, { useState, useEffect } from 'react';
import Question from './Questions';
import QUIZZ_REACT from '../QUIZZ_REACT.json';

const Quizz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(new Array(QUIZZ_REACT.length).fill(null));
  }, []);

  const handleSelectAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUIZZ_REACT.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="container mt-5">
      <Question
        questionData={QUIZZ_REACT[currentQuestionIndex]}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={answers[currentQuestionIndex]}
      />
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button className="btn btn-primary" onClick={nextQuestion} disabled={currentQuestionIndex === QUIZZ_REACT.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quizz;
