import React, { useState } from 'react';
import './App.css';
import Login from './Assets/Login';
import Signup from './Assets/SignUp';

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const switchToSignup = () => setIsLoginPage(false);
  const switchToLogin = () => setIsLoginPage(true);

  return (
    <div className="App">
      {isLoginPage ? (
        <Login onSwitchToSignup={switchToSignup} />
      ) : (
        <Signup onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
};




export default App;
