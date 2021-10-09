import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './routes/home/Main/Main';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
