import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class NotePageNav extends Component {
    render() {

        return (
            <nav className='note-nav'>
                <button 
                    onClick={() => this.props.history.goBack()}
                    className='note-page-back-link'>
                        back
                </button>
                <h2 className='note-folder-name'>{this.props.currentFolder.name}</h2>
            </nav>
        )
    }
}

export default withRouter(NotePageNav);