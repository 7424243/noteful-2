import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class NoteListNav extends Component {
    render() {
        
        const list = this.props.folders.map((folder, i) => 

            <li 
                key={i} 
                id={folder.id} 
                className='folder'>
                <NavLink 
                    to={`../noteslist/${folder.id}`}
                    className='folder-name'
                    foldername={folder.name}
                    notes={this.props.notes}>{folder.name}</NavLink>
            </li>
        );

        return (
            <div className='folders-container'>
                <ul className='folder-list'>
                    {list}
                </ul>
                <NavLink 
                    to='/addfolder' 
                    className='add-folder-link'
                    >Add Folder</NavLink>
            </div>
        )
    }
}

export default NoteListNav;