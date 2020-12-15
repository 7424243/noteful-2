import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import DUMMYSTORE from './dummy-store';
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
    this.setState({
      notes: DUMMYSTORE.notes,
      folders: DUMMYSTORE.folders,
    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
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
                render={(props) => <NotePageNav 
                  folders={this.state.folders}
                  notes={this.state.notes}
                  noteId={props.match.params.noteId}/> }
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
                render={(props) => <FolderNoteListMain
                  notes={this.state.notes}
                  folderId={props.match.params.folderId}
                  folders={this.state.folders}/>}
              />  
              <Route 
                path='/notepage/:noteId' 
                render={(props) => <NotePageMain 
                  folders={this.state.folders}
                  notes={this.state.notes}
                  noteId={props.match.params.noteId}/> }
              />
            </main>
          </div>
        </NotefulContext.Provider>
        
      </div>
    );
  }

}

export default App;
