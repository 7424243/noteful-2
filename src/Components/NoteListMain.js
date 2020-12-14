
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { format } from 'date-fns';

class NoteListMain extends Component {

    render() {
        const list = this.props.notes.map((note, i) =>
            <li 
                key={i} 
                className='note-item'>
                <NavLink 
                    to={`../notepage/${note.id}`} 
                    className='note-name-link'><h2>{note.name}</h2></NavLink>
                <p>{format(new Date(note.modified), 'MM/d/yyyy')}</p>
                <button className='delete-note'>delete</button>
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