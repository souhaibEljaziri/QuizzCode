import React, { useState } from 'react';
import Login from './components/Login';
import HomePage from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Implement your login logic here
    // For example, set isLoggedIn to true after successful login
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, set isLoggedIn to false after logout
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? <HomePage onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
