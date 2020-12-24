import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from './ValidationError';
import PropTypes from 'prop-types';
import '../Styling/Forms.css';
import ErrorBoundary from './ErrorBoundary';

class AddNote extends Component {
    //set component's initial state
    constructor(props) {
        super(props);
        this.state = {
                name:'',
                content: '',
                folderId: '',
                modified: '',
        }
    }
    //allow access to content
    static contextType = NotefulContext;
    //update state with name's new value
    updateName(name) {
        this.setState({name: name})
    };
    //update state with content's new value
    updateContent(content) {
        this.setState({content: content})
    };
    //update state with folderId's new value
    updateFolder(folderId) {
        this.setState({folderId: folderId})
    };
    //use Route's props history to push home
    handleClickCancel = () => {
        this.props.history.push('/')
    };
    //update state with new modifiedDate when form is submitted
    handleClickSubmit = () => {
        const modifiedDate = new Date().toISOString();
        this.setState({modified: modifiedDate});
    };
    //make sure the name is longer than 0 characters
    validateName() {
        const name = this.state.name.trim();
        if(name.length === 0) {
            return 'Name is required'
        }
    };
    //make sure the content is longer than 0 characters
    validateContent() {
        const content = this.state.content.trim();
        if(content.length === 0) {
            return 'At least one character is required'
        }
    };
    //make sure the folder is longer than 0 characters
    validateFolder() {
        const folder = this.state.folderId;
        if(folder.length === 0) {
            return 'Must select a folder'
        }
    }
    //when the form is submitted, make a POST request to the api
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            body: JSON.stringify(this.state), //make sure the body is in JSON string format using state's data
            headers: {
                'content-type': 'application/json'
            },
            })
            .then(response => {
                console.log(response);
                if (!response.ok)
                    return response.json().then(e => Promise.reject(e));
                return response.json();
            })
            .then((data) => {
                this.context.addNote(data); //update context to include the new note using the data
                this.props.history.push('/'); //use the Route's history prop to push home
            })
            .catch(error => {
                console.error({error});
            });
    }


    render() {
        //for multiple options to select a folder from, map over the existing folders in context and create an option for each folder name but set the value to the folder's id
        const options = this.context.folders.map((folder) =>
            <option key={folder.id} value={folder.id}>{folder.name}</option>
        );

        return (
            <ErrorBoundary>
                <form className='note-form' onSubmit={e => this.handleSubmit(e)}>{/*When the form is submitted, call handleSubmit using the event*/}
                    <h2>Create New Note</h2>
                    <div className='note-form_required'>* required field</div>
                    <div className='form-group'>
                        <label htmlFor='name'>Name *</label>
                        <input 
                            type='text'
                            className='note-name'
                            name='name'
                            id='name'
                            onChange={e => this.updateName(e.target.value)}/> {/*when this is changed, call updateName using the inserted value*/}
                            {this.state.name &&
                            <ValidationError message={this.validateName()}/>}{/*when there is a name, use the ValidationError component to display an error, if there is one*/}
                        <label htmlFor='content'>Content *</label>
                        <textarea 
                            className='content'
                            name='content'
                            onChange={e => this.updateContent(e.target.value)}/> {/*When this is changed, call updateContent using the inserted value*/}
                            {this.state.content &&
                            <ValidationError message={this.validateContent()}/>} {/*when there is a content, use the ValidationError component to display an error, if there is one*/}
                        <label htmlFor='folder'>Folder *</label>
                        <select 
                            className='note-folder'
                            name='folder'
                            onChange={e => this.updateFolder(e.target.value)}> {/*when an option is selected, use the selected value to call updateFolder*/}
                            <option></option>
                            {options}
                        </select>
                        {this.state.folder && 
                            <ValidationError message={this.validateFolder()}/>} {/*when there is a folder, call use the ValidationError component to display an error message, if there is one*/}
                    </div>
                    <div className='form-button-group'>
                        <button type='reset' className='form-button'
                            onClick={this.handleClickCancel}>Cancel</button> {/*on clicked, call handleClickCancel*/}
                        <button 
                            type='submit' 
                            className='form-button'
                            onClick={this.handleClickSubmit} //on clicked, call handleClickSubmit in order to get a date stamp
                            disabled={this.validateName() || this.validateContent() || this.validateFolder()}>Submit</button> {/*disable the submit button until all validate functions are satisfied*/}
                    </div>
                </form>
            </ErrorBoundary>
        )
    }
}

export default AddNote;

AddNote.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func
    }).isRequired,
}