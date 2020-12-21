import React, {Component} from 'react';
import PropTypes from 'prop-types';

//an Error Boundary is a component that can catch a JS error anywhere in the child component tree and log it and display an error message instead of crashing the whole app.

class ErrorBoundary extends Component {
    //set default state so that hasError is false.
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    //update state so that the next render will show the fallback UI
    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    //render the UI based on hasError
    render() {

        if (this.state.hasError) {
            return <h2>Something went wrong, unable to display at this time.</h2>
        
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;

//set PropTypes for validation
ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired
}