import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import Note from './Note';
import '../Styling/NoteListMain.css';

class NoteListMain extends Component {
    //allow access to context
    static contextType = NotefulContext;

    render() {
        const folderId = this.props.match.params.folderId; //get the folderId from the Route's props
        const notes = this.context.notes; //get the notes from context
        const getNotes = (notes, folderId) => (
            (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
        )//if there is note a folderId, then get all notes, else, find the notes with the specific folderId
        const notesForFolder = getNotes(notes, folderId); //provide the parameters
        const list = notesForFolder.map((note) =>
            <li 
                key={note.id} 
                className='note-item'>
                <Note 
                  id={note.id}
                  name={note.name}
                  modified={note.modified}/>

            </li>
            )//map over the notes and create a List Item for each using the Note Component
        return (
            <div className='notes-list-container'>
                <ul className='notes-list'>
                    {list}
                </ul>
                <button className='add-button'>
                    <Link 
                        to='/addnote' 
                        className='add-note-link'>Add Note</Link> {/*Link the add button to the /addnote route*/}
                </button>
            </div>
        )
    }
}

export default NoteListMain;

NoteListMain.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            folderId: PropTypes.string
        })
    }).isRequired
}
