import React, {Component} from 'react';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';
import '../Styling/NotePageMain.css';
import ErrorBoundary from './ErrorBoundary';


class NotePageMain extends Component {
    static contextType = NotefulContext;

    static defaultProps = {
        match: {
          params: {}
        }
    }

    handleClickDelete = e => {
        e.preventDefault()
        this.props.history.push('/')
        const {noteId} = this.props.match.params
        fetch(`http://localhost:9090/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(e => Promise.reject(e));
            return res.json();
          })
          .then(() => {
            this.context.deleteNote(noteId);
            
          })
          .catch(error => {
            console.error({ error });
          })
      }

    render() {
        const {noteId} = this.props.match.params;
        const {notes=[]} = this.context;
        const getNote = (notes, noteId) =>
            notes.find(note => note.id === noteId);
        const noteForPage = getNote(notes, noteId);
        return (
          <ErrorBoundary>
            <div className='note-page-container'>
                <main className='note-spec-container'>
                    <h3>{noteForPage ? noteForPage.name : null}</h3>
                    <p>{noteForPage ? format(new Date(noteForPage.modified), 'MM/d/yyyy') : null}</p>
                    <p>{noteForPage ? noteForPage.content : null}</p>
                    <button className='note-page-delete-link' 
                    onClick={this.handleClickDelete}>delete</button>
                </main>
            </div>
          </ErrorBoundary> 
        )
    }
}

export default NotePageMain;

