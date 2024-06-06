import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Questions = ({ questionData, onSelectAnswer, selectedAnswer }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{questionData.question}</h5>
        <div className="list-group">
          {questionData.suggestion.map((suggestion, index) => (
            <button
              key={index}
              className={`list-group-item list-group-item-action ${selectedAnswer === index ? 'active' : ''}`}
              onClick={() => onSelectAnswer(index)}
            >
              {suggestion.answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
