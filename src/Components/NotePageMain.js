import React, {Component} from 'react';
import { format } from 'date-fns';


class NotePageMain extends Component {
    render() {

        const noteSpecs = this.props.notes.find(note =>
            note.id === this.props.noteId);
   

        return (
            <div className='note-page-container'>
                <main className='note-spec-container'>
                    <h3>{noteSpecs.name}</h3>
                    <p>{format(new Date(noteSpecs.modified), 'MM/d/yyyy')}</p>
                    <p>{noteSpecs.content}</p>
                    <button className='note-page-delete-link'>delete</button>
                </main>
            </div>
        )
    }
}

export default NotePageMain;