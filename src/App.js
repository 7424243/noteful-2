import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Link to='/' className='header-link'><h1>Noteful</h1></Link>
      </header>
    </div>
  );
}

export default App;
