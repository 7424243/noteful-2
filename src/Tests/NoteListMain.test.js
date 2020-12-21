import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteListMain from '../Components/NoteListMain';

it('renders without crashing', () => {
    //create a div in which to render the component
    const div = document.createElement('div');
    //define fake testing props for this.props.match.params.folderId
    const props = {
        match: {
            params: {
                folderId: 'Test_Folder_Id'
            }
        }
    }
    //render the component, with props, that is wrapped in BrowserRouter (as it is part of a Route) inside the previously created div
    ReactDOM.render(<BrowserRouter><NoteListMain {...props}/></BrowserRouter>, div);
    //clean up the code by unmounting NoteListMain from the DOM
    ReactDOM.unmountComponentAtNode(div);
});