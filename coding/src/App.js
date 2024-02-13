import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './Home';
import SignUpForm from './SignUp';
import LoginForm from './login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/SignUp" element={<SignUpForm />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

