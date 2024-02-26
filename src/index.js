import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Reset.css';
import './Styles/App.css';
import MyApp from './App';
import "typeface-montserrat";
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
