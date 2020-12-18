import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ErrorBoundary from '../Components/ErrorBoundary';

function Something() {
    return null;
}

it('renders without crashing if error', () => {
    const wrapper = shallow(
        <ErrorBoundary><Something /></ErrorBoundary>
    );
    wrapper.setState({hasError: true});
    
    // const div = document.createElement('div');
    // ReactDOM.render(<ErrorBoundary />, div);
    // ReactDOM.unmountComponentAtNode(div);
});