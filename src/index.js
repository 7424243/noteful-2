import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

//render the App Component. 
//Wrap with BrowserRouter (access to forward and back buttons using browser, allows us to render components depending on the URL's path)
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')//'root' id is found in index.html inside of public folder.
);
