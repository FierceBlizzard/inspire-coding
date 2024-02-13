import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import HomePage from './Home';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Authenticator initialAuthState="signIn">
          <Router>
            <Routes>
              <Route path="/home" element={<HomePage />} />
            </Routes>
          </Router>
        </Authenticator>
    </div>
  );
}

export default App;

