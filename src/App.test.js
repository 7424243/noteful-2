import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';


it('renders without crashing', () => {
  //create a div in which to render the component
  const div = document.createElement('div')
  //render the component wrapped in BrowserRouter (as it includes Route)
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    div
  )
  //clean up the code by unmounting the App component from the DOM
  ReactDOM.unmountComponentAtNode(div)
})
