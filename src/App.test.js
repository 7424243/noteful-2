import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
