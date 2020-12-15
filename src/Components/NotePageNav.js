import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import NotefulContext from "../NotefulContext";

class NotePageNav extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      }

    static contextType = NotefulContext;

    render() {
        const noteSpecs = this.context.notes.find(note =>
            note.id === this.props.match.params);
        console.log(noteSpecs)

        // const currentFolder = this.context.folders.find(folder => 
        //     folder.id === noteSpecs.folderId);
        
        return (
            <nav className='note-nav'>
                <button 
                    onClick={() => this.props.history.goBack()}
                    className='note-page-back-link'>
                        back
                </button>
                <h2 className='note-folder-name'>folder name</h2>
            </nav>
        )
    }
}

export default withRouter(NotePageNav);