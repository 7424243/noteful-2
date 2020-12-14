import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { format } from 'date-fns';

class NotesList extends Component {

    render() {
        const folderSelectedList = this.props.notes.filter(note => 
            note.folderId === this.props.folderId)
            .map((note, i) =>
            <li 
                key={i} 
                className='note-item'>
                <NavLink 
                    to={`../notepage/${note.id}`} 
                    className='note-name-link'><h2>{note.name}</h2></NavLink>
                <p>{format(new Date(note.modified), 'MM/d/yyyy')}</p>
                <button>delete</button>
            </li>
            )

        const folderSelectedName = this.props.folders.filter(folder => 
            folder.id === this.props.folderId)

            console.log(folderSelectedName[0].name);


        return (
            <div>
                <main className='notes-list-container'>
                    <h3 className='folder-sidebar'>{folderSelectedName[0].name}</h3>
                    <ul className='notes-list'>
                        {folderSelectedList}
                        <NavLink 
                            to='/addnote' 
                            className='notes-list-addnote-button'>Add Note</NavLink>
                    </ul>
                </main>
            </div>
        )
    }
}

export default withRouter(NotesList);