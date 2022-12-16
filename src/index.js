import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogsData = {
    users: [
        {id: 1, name: 'Andry'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Alexy'},
        {id: 4, name: 'George'},
        {id: 5, name: 'Andy'},
        {id: 6, name: 'Phil'},
    ],
    usersMessages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Its me'},
        {id: 3, message: 'trololo'},
        {id: 4, message: 'ololo'},
        {id: 5, message: 'Hello'},
        {id: 6, message: 'Yoo'},
    ],
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App data={dialogsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
