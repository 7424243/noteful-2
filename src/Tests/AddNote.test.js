import React from 'react';
import ReactDOM from 'react-dom';
import AddNote from '../Components/AddNote';

it('renders without crashing', () => {
  //create a div in which to render the component
  const div = document.createElement('div');
  //define fake data for this.props.history.push (which are required in the component)
  const props = {
    history: {
      push: jest.fn()
    }
  }
  //render the component inside the previously created div using the defined props
  ReactDOM.render(<AddNote {...props}/>, div);
  //clean up the code by removing the mounted AddNote component form the DOM
  ReactDOM.unmountComponentAtNode(div);
});