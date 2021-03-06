import React, {Component} from 'react';
import { format } from 'date-fns';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import '../Styling/NotePageMain.css';


class NotePageMain extends Component {

  //allow access to context
    static contextType = NotefulContext;
  //DELETE api request
    handleClickDelete = e => {
        e.preventDefault()
        //this.props.history.push('/') //access Route's props to push home
        const noteId = this.props.match.params.note_id
        fetch(`https://peaceful-spire-25787.herokuapp.com/api/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            console.log(res)
            if (!res.ok) {
              return res.json().then(e => Promise.reject(e));
            }
            return res;
          })
          .then(() => {
            this.context.deleteNote(noteId); //update context using deleteNote
            this.props.history.push('/') //access Route's props to push home
            
          })
          .catch(error => {
            console.error({ error });
          })
      }

    render() {
        const noteId = parseInt(this.props.match.params.note_id); //get noteId from Route's match props
        const notes = this.context.notes; //get notes from context
        const getNote = (notes, noteId) =>
            notes.find(note => note.id === noteId); //get the specific note that matches the noteId
        const noteForPage = getNote(notes, noteId); //pass specific parameters
        return (
          //conditionally render the name, date, and content if getNote found a note
          <div className='note-page-container'>
              <main className='note-spec-container'>
                  <h3>{noteForPage ? noteForPage.note_name : null}</h3>
                  <p>{noteForPage ? format(new Date(noteForPage.date_modified), 'MM/d/yyyy') : null}</p>
                  <p>{noteForPage ? noteForPage.content : null}</p>
                  <button className='note-page-delete-link' 
                  onClick={this.handleClickDelete}>delete</button> {/*call handleClickDelete*/}
              </main>
          </div>
        )
    }
}

export default NotePageMain;

NotePageMain.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteId: PropTypes.string
    })
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func
  }).isRequired
}

