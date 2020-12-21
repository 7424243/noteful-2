import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from '../Components/AddFolder';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      history: {
        push: jest.fn()
      }
    }
    ReactDOM.render(<AddFolder {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });