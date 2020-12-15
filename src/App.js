import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListNav from './Components/NoteListNav';
import NoteListMain from './Components/NoteListMain';
import NotePageMain from './Components/NotePageMain';
import NotePageNav from './Components/NotePageNav';
import FolderNoteListMain from './Components/FolderNoteListMain';
import NotefulContext from './NotefulContext';

class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:9090/notes`),
      fetch(`http://localhost:9090/folders`)
    ])
        .then(([notesResponse, foldersResponse]) => {
          if (!notesResponse.ok) 
            return notesResponse.json().then(error => Promise.reject(error));
          if (!foldersResponse.ok)
            return foldersResponse.json().then(error => Promise.reject(error));
          return (Promise.all([notesResponse.json(), foldersResponse.json()])) ;
        })
        .then(([notes, folders]) => {
          this.setState({notes, folders});
          
        })
        .catch(error => {
          console.error({error})
        });
  }

  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    }
    return (
      <div className="App">
        <header>
          <Link to='/' className='header-link'><h1>Noteful</h1></Link>
        </header>
        <NotefulContext.Provider value={contextValue} >
          <div className='nav-main'>
            <nav>
              <Route 
                exact
                path='/' 
                component={NoteListNav}
              />
              <Route
                path='/noteslist/:folderId'
                component={NoteListNav}
              />  
              <Route 
                path='/notepage/:noteId'
                component={NotePageNav}
              />
            </nav>
            <main>
              <Route 
                exact
                path='/' 
                component={NoteListMain}
              />
              <Route
                path='/noteslist/:folderId'
                component={FolderNoteListMain}
              />  
              <Route 
                path='/notepage/:noteId' 
                component={NotePageMain}
              />
            </main>
          </div>
        </NotefulContext.Provider>
        
      </div>
    );
  }

}

export default App;
