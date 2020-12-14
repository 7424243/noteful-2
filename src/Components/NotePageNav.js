import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class NotePageNav extends Component {
    render() {
        const noteSpecs = this.props.notes.find(note =>
            note.id === this.props.noteId);

        const currentFolder = this.props.folders.find(folder => 
            folder.id === noteSpecs.folderId);
        
        return (
            <nav className='note-nav'>
                <button 
                    onClick={() => this.props.history.goBack()}
                    className='note-page-back-link'>
                        back
                </button>
                <h2 className='note-folder-name'>{currentFolder.name}</h2>
            </nav>
        )
    }
}

export default withRouter(NotePageNav);