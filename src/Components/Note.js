import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import '../Styling/Note.css';



class Note extends Component {
    //allow access to context
    static contextType = NotefulContext;
    //DELETE api request
    handleClickDelete = (e) => {
        e.preventDefault()
        const noteId = this.props.id; //use the noteId passed from props
        fetch(`http://localhost:8000/api/notes/${noteId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          },
        })
          .then(res => {
            if (!res.ok) {
              return res.json().then(e => Promise.reject(e));
            }
            return res.json();
          })
          .then(() => {
            this.context.deleteNote(noteId); //update context using the deleteNote function
            
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
                    className='note-name-link'><h2>{name}</h2></Link>{/*the name links to the /notepage/id dynamic route*/}
                <p>{format(new Date(modified), 'MM/d/yyyy')}</p> {/*converts the date*/}
                <button 
                    className='delete-note'
                    onClick={this.handleClickDelete}>delete</button>
            </div>        
        )
    }
}

export default Note;

//set PropTypes for validation
Note.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
}


