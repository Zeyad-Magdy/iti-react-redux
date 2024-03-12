import React from 'react';
import ReactDOM from 'react-dom/client'; //needed for the react dom in reach 18
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //used for react render 18 if i am building the app from scratch manually.
  <React.StrictMode>
    <App/>
  </React.StrictMode>

);

reportWebVitals();
