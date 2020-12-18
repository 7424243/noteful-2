import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../Components/ErrorBoundary';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><ErrorBoundary /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});