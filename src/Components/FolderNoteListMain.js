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
                <main className='folder-notes-list-container'>
                    <h3 className='folder-name'>{folderSelectedName[0].name}</h3>
                    <ul className='folder-notes-list'>
                        {folderSelectedList}
                        <NavLink 
                            to='/addnote' 
                            className='folder-notes-add-link'>Add Note</NavLink>
                    </ul>
                </main>
            </div>
        )
    }
}

export default withRouter(NotesList);