import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Note from '../Components/Note';

it('renders without crashing', () => {
  //create a  div in which to render the component
  const div = document.createElement('div');
  //render the Note component, wrapped in BrowserRouter (as its within a Route), inside the previously created div
  ReactDOM.render(<BrowserRouter><Note id={'1234'} name={'Test'} modified={'2019-01-03T00:00:00.000Z'}/></BrowserRouter>, div);
  //clean up the code by unmounting the Note component from the DOM
  ReactDOM.unmountComponentAtNode(div);
});
