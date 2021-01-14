import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import NoteListNav from './Components/NoteListNav';
import NoteListMain from './Components/NoteListMain';
import NotePageMain from './Components/NotePageMain';
import NotePageNav from './Components/NotePageNav';
import NotefulContext from './NotefulContext';
import AddFolder from './Components/AddFolder';
import AddNote from './Components/AddNote';
import ErrorBoundary from './Components/ErrorBoundary';

class App extends Component {
  //set state
  state = {
    notes: [],
    folders: [],
  }
  //fetch api data inside componentDidMount method
  componentDidMount() {
    //Promise.all() runs several asynchronous operations in parallel. Accepts an array of promises/fetches and ensures all are resolved before invoking the then() method.
    Promise.all([
      fetch(`https://peaceful-spire-25787.herokuapp.com/api/notes`),
      fetch(`https://peaceful-spire-25787.herokuapp.com/api/folders`)
    ])
        //the parameter of then() is an array of results of the Promises.
        .then(([notesResponse, foldersResponse]) => {
          if (!notesResponse.ok) 
            return notesResponse.json().then(error => Promise.reject(error));
          if (!foldersResponse.ok)
            return foldersResponse.json().then(error => Promise.reject(error));
          return (Promise.all([notesResponse.json(), foldersResponse.json()])) ;
        })
        .then(([notes, folders]) => {
          this.setState({notes, folders}); //update State with response data
          
        })
        .catch(error => {
          console.error({error}); //this catch logs the error object in the console
        });
  }
  //this function uses class property syntax in order to bind this function to state using 'this'
  //this function updates state to include notes that do not have a particular noteId
  handleDeleteNote = noteId => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== noteId)
    });
  }
  //this function uses class property syntax in order to bind this function to state using 'this'
  //this function updates state to include a newly created folder
  addFolder = folder => {
    this.setState({
      folders: [ ...this.state.folders, folder],//[...]='spread syntax' (can be used when alements from an object or array need to be included in a lsit of some kind)
    });
  }
  //this function uses class property syntax in order to bind this function to state using 'this'
  //this function updates state to include a newly created note
  addNote = note => {
    this.setState({
      notes: [ ...this.state.notes, note],//[...]='spread syntax' (can be used when alements from an object or array need to be included in a lsit of some kind)
    });
  }
  //render method is required for class components
  render() {
    //set the context values to the data that is currently in state and include the event handler functions
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    };
    return (
      <div className="App">
        <header>
          <Link to='/' className='header-link'><h1>Noteful</h1></Link>{/*A Link instead of a header because this component is wrapper in Router*/}
        </header>
        <NotefulContext.Provider value={contextValue} >{/*Wrap code in context provider; any component that wants to read the context needs to be a descendent of the provider. Include a value prop in order to actually pass/hold the context data*/}
          <div className='nav-main'>
            <ErrorBoundary>
              <nav>
                <Route 
                  exact //this keyword ensures that you only display one route at a time -- we only want this exact component to show for exact components
                  path='/'  //home path
                  component={NoteListNav} //this is the component that should render in the home path
                />
                <Route
                  path='/noteslist/:folder_id' //this is a dynamic route path
                  component={NoteListNav} 
                />  
                <Route 
                  path='/notepage/:note_id'
                  component={NotePageNav}
                />
                <Route 
                  path='/addfolder'
                  component={AddFolder}/>
              </nav>
            </ErrorBoundary>
            <ErrorBoundary>
              <main className='note-page-container'>
                <Route 
                  exact
                  path='/' 
                  component={NoteListMain}
                />
                <Route
                  path='/noteslist/:folder_id'
                  component={NoteListMain}
                />  
                <Route 
                  path='/notepage/:note_id' 
                  component={NotePageMain}
                />
                <Route 
                  path='/addnote'
                  component={AddNote}/>
              </main>
            </ErrorBoundary>
          </div>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
