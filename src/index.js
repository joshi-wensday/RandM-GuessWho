import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// to make GUESS-WHO, set name display default to none/guess prompt or set className to "hidden" and hide in css
// then have first search box result and 1st element in array of characters names check for match. If match identified
// change class of <h1 className="show">{namem}</h1> for first item in list. Then have search box result iterate to now only compare to second item in array (second character)
// OR easier implementation. If matches any characters name will reveal that characters name!
// Have a button to reveal all character names and hide all modify the className atribute and re-render.
