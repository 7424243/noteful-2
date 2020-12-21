import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from './ValidationError';
import PropTypes from 'prop-types';
import '../Styling/Forms.css';
import ErrorBoundary from './ErrorBoundary';

class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', //set initial state to have an empty string for name
            touched: false
        }
    };
    //include context that that it is accessible
    static contextType = NotefulContext;

    //use the folder name input to update state
    updateFolder(folder) {
        this.setState({name: folder, touched:true})
    };

    handleClickCancel = () => {
        this.props.history.push('/')
    };
    //validate folder name in that it is longer than 0 characters (required)
    validateFolder() {
        const folder = this.state.name.trim();
        if (folder.length === 0) {
            return 'Folder is required'
        } 
    };
    //do something when the form is submitted...
    handleSubmit(event) {
        event.preventDefault(); 
        console.log('Folder:', this.state.name);
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            body: JSON.stringify(this.state),//makes sure that the JSON object is in JSON string format
            headers: {
                'content-type': 'application/json'
            },
        })//API with a POST request
            .then(response => {
                console.log(response);
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e));
                return response.json();
            })
            .then((data) => {
                this.context.addFolder(data); //use the addFolder function in context to add the data to context (creates another folder in context)
                this.props.history.push('/'); //use Route to push to the home route
            })
            .catch(error => {
                console.error({error}); //show the error if unsuccessful promise
            });
    }

    render() {
        return (
            <ErrorBoundary>
                <form className='folder-form' onSubmit={event => this.handleSubmit(event)}>
                    <h2>Create New Folder</h2>
                    <div className='folder-form_required'>* required field</div>
                    <div className='form-group'>
                        <label htmlFor='folder'>Folder *</label> {/*htmlFor instead of for*/}
                        <input 
                            type='text' 
                            className='new-folder-name' 
                            name='folder' 
                            id='folder'
                            onChange={e => this.updateFolder(e.target.value)} /> {/*call updateFolder with the value that was entered*/}
                            {this.state.name.touched && 
                            <ValidationError message={this.validateFolder()}/>} {/*if touched is true, render ValidationError with message from validateFolder*/}
                    </div>
                    <div className='form-button-group'>
                        <button 
                            type='reset' 
                            className='form-button'
                            onClick={this.handleClickCancel}>Cancel</button> {/*call handleClickCancel is clicked*/}
                        <button type='submit' className='form-button' disabled={this.validateFolder()}>Add Folder</button> {/*disable the button until validateFolder is satisfied*/}
                    </div>
                </form>
            </ErrorBoundary>
        )
    }
}

export default AddFolder;

AddFolder.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired
}