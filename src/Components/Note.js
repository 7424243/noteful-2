import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import '../Styling/Note.css';


class Note extends Component {

    static contextType = NotefulContext;

    handleClickDelete = (e) => {
        e.preventDefault()
        const noteId = this.props.id;
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
        const {name, id, modified} = this.props
        return (
            <div className='note'>
                <Link 
                    to={`../notepage/${id}`} 
                    className='note-name-link'><h2>{name}</h2></Link>
                <p>{format(new Date(modified), 'MM/d/yyyy')}</p>
                <button 
                    className='delete-note'
                    onClick={this.handleClickDelete}>delete</button>
            </div>        
        )
    }
}

export default Note;

Note.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.string,
}

Note.defaultProps ={
  id: null,
  name: null,
  modified: null
}