import React from 'react';
import { shallow } from 'enzyme'; //this can only be imported after an npm install of the enzyme library and setting up the adapter in setupTests.js
import ErrorBoundary from '../Components/ErrorBoundary';

//create a test function component the returns null
function Something() {
    return null;
}

it('renders without crashing if error', () => {
    //use a shallow function to render the test function component
    const wrapper = shallow(
        <ErrorBoundary><Something /></ErrorBoundary>
    );
    //update the state of hasError to true
    wrapper.setState({hasError: true});
});