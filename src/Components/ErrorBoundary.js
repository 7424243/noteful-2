import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }


    render() {

        // return this.state.hasError ? <h2>Something went wrong, unable to display at this time.</h2> : this.props.children

        if (this.state.hasError) {
            return <h2>Something went wrong, unable to display at this time.</h2>
        
        } else {
            return this.props.children
        }

    }
}

export default ErrorBoundary;