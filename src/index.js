import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Import your main component (usually App.js)
import './index.scss'; // Import global CSS or Sass if needed

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
