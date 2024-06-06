import React from 'react';
import Quizz from './Quizz'
const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">Welcome to Our Website</h1>
              <p className="lead">
              <Quizz />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
