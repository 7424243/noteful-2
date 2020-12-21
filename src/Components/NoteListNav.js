import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import '../Styling/NoteListNav.css';

class NoteListNav extends Component {
    //allow access to context
    static contextType = NotefulContext;
    
    render() {
        //map over the folders in context and for each folder create a list item that has the folder name as a NaveLink to the noteslist/:folderId route
        const list = this.context.folders.map((folder) => 
            <li 
                key={folder.id} 
                id={folder.id} 
                className='folder'>
                <NavLink 
                    to={`../noteslist/${folder.id}`}
                    className='folder-name'
                    foldername={folder.name}
                    notes={this.context.notes}>{folder.name}</NavLink>
            </li>
        )

        return (
            <div className='folders-container'>
                <ul className='folder-list'>
                    {list}
                </ul>
                <button className='folder-add-button'>
                    <NavLink 
                        to='/addfolder' 
                        className='add-folder-link'
                        >Add Folder</NavLink> {/*NavLink to the /addfolder route. NavLink provides an activeClassName attribute that helps with styling*/}
                </button>

            </div>
        )
    }
}

export default NoteListNav;