import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import NotefulContext from "../NotefulContext";
import PropTypes from 'prop-types';
import '../Styling/NotePageNav.css';

class NotePageNav extends Component {
    // set contextType to the app's context in order to access it and use it.
    static contextType = NotefulContext;

    render() {
        const noteId = parseInt(this.props.match.params.note_id); //get noteId from Route's props
        const notes = this.context.notes; //get notes from context
        const folders = this.context.folders; //get folders from context
        const getNote = (notes, noteId) =>
            notes.find(note => note.id === noteId); //get a specific note by passing in all of the notes and the noteId and finding the note that has the noteId
        const noteForPage = getNote(notes, noteId); //pass in notes and noteId
         const currentFolder = folders.find(folder => 
             folder.id === noteForPage.folder_id); //get the current folder by finding the folder that has the note's folderId
        return (
            <nav className='note-nav'>
                <button 
                    onClick={() => this.props.history.goBack()} //use Route's history to go back
                    className='note-page-back-link'>
                        back
                </button>
                <h2 className='note-folder-name'>{currentFolder ? currentFolder.folder_name : null}</h2>
            </nav>
        )
    }
}

export default withRouter(NotePageNav);

//define PropTypes for validation
NotePageNav.propTypes = {
    match: PropTypes.shape({ //.shape is used when you have a nested key/value pair
        params: PropTypes.shape({
            noteId: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired //.isRequired, always need it if the app will crash without it.
}

