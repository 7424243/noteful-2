import React, {Component} from 'react';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';


class NotePageMain extends Component {

    static contextType = NotefulContext;

    static defaultProps = {
        match: {
          params: {}
        }
      }

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
        const {noteId} = this.props.match.params;
        const {notes=[]} = this.context;
        const getNote = (notes, noteId) =>
            notes.find(note => note.id === noteId)

        const noteForPage = getNote(notes, noteId);
   

        return (
            <div className='note-page-container'>
                <main className='note-spec-container'>
                    <h3>{noteForPage.name}</h3>
                    <p>{noteForPage.folderId}</p>
                    <p>{format(new Date(noteForPage.modified), 'MM/d/yyyy')}</p>
                    <p>{noteForPage.content}</p>
                    <button className='note-page-delete-link' onClick={this.handleDeleteNote}>delete</button>
                </main>
            </div>
        )
    }
}

export default NotePageMain;
