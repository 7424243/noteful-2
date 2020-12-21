import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from '../Components/AddNote';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      history: {
        push: jest.fn()
      }
    }
    ReactDOM.render(<AddNote {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });