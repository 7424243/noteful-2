import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import DUMMYSTORE from './dummy-store';
import NotesListNav from './Components/NoteListNav';
import NoteListMain from './Components/NoteListMain';

class App extends Component {
  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState({
      notes: DUMMYSTORE.notes,
      folders: DUMMYSTORE.folders
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to='/' className='header-link'><h1>Noteful</h1></Link>
        </header>
        <div className='nav-main'>
          <nav>
          <Route 
              exact
              path='/' 
              render={() => <NotesListNav 
                folders={this.state.folders}
                notes={this.state.notes}/>}
            />
          </nav>
          <main>
            <Route 
              exact
              path='/' 
              render={() => <NoteListMain 
                folders={this.state.folders}
                notes={this.state.notes}/>}
            />
          </main>
        </div>
        
      </div>
    );
  }

}

export default App;
