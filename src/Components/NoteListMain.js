
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';


class NoteListMain extends Component {
    static defaultProps = {
        onDeleteNote: () => {},
        match: {
            params: {}
        }
    }

    static contextType = NotefulContext;

    handleClickDelete = e => {
        e.preventDefault()
        const {noteId} = this.props.match.params;
    
        fetch(`http://localhost:9090/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e))
            return res.json()
          })
          .then(() => {
            this.context.deleteNote(noteId)
            this.props.history.push('/')
          })
          .catch(error => {
            console.error({ error })
          })
    }

    handleDeleteNote = noteId => {
        console.log('i was clicked')
    }

    render() {
        const {folderId} = this.props.match.params;
        const {notes=[]} = this.context;
        const getNotes = (notes, folderId) => (
            (!folderId) ? notes : notes.filter(note => note.folderId === folderId)
        )
        const notesForFolder = getNotes(notes, folderId);
        const list = notesForFolder.map((note) =>
            <li 
                key={note.id} 
                className='note-item'>
                <NavLink 
                    to={`../notepage/${note.id}`} 
                    className='note-name-link'><h2>{note.name}</h2></NavLink>
                <p>{format(new Date(note.modified), 'MM/d/yyyy')}</p>
                <button 
                    className='delete-note'
                    onClick={this.handleClickDelete}
                    >delete</button>
            </li>
            )
        return (
            <div className='notes-list-container'>
                <ul className='notes-list'>
                    {list}
                </ul>
                <NavLink 
                    to='/addnote' 
                    className='add-note-link'>Add Note</NavLink>
            </div>
        )
    }
}

export default NoteListMain;