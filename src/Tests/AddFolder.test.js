import React from 'react';
import ReactDOM from 'react-dom';
import AddFolder from '../Components/AddFolder';

it('renders without crashing', () => {
  //create the div that to render the component into
  const div = document.createElement('div');
  //define testing data for this.props.history.push (which are required for the component)
  const props = {
    history: {
      push: jest.fn()
    }
  }
  //render the component with the fake props in the previously created div.
  ReactDOM.render(<AddFolder {...props}/>, div);
  //clean up the code by removing the mounted AddFolder component from the DOM
  ReactDOM.unmountComponentAtNode(div);
});