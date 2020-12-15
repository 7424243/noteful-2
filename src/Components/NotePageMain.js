import React, {Component} from 'react';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';


class NotePageMain extends Component {

    static contextType = NotefulContext;

    // handleClickDelete = event => {
    //     event.preventDefault()
    //     const noteId = this.props.id
    //     fetch(`http://localhost:9090/notes${noteId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //     })
    //         .then(response => {
    //             if (!response.ok)
    //                 return response.json().then(e => Promise.reject(e))
    //             console.log(response.json())
    //             return response.json();
    //         })
    //         .then(() ={
    //             this.context.deleteNote(noteId)
    //         })
    //         .catch(error => {
    //             console.log({error})
    //         })
    // }

    render() {

        const noteSpecs = this.props.notes.find(note =>
            note.id === this.props.noteId);
   

        return (
            <div className='note-page-container'>
                <main className='note-spec-container'>
                    <h3>{noteSpecs.name}</h3>
                    <p>{format(new Date(noteSpecs.modified), 'MM/d/yyyy')}</p>
                    <p>{noteSpecs.content}</p>
                    <button className='note-page-delete-link' onClick={this.handleDeleteNote}>delete</button>
                </main>
            </div>
        )
    }
}

export default NotePageMain;