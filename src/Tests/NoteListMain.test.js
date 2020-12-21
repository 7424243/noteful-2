import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteListMain from '../Components/NoteListMain';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        match: {
            params: {
                folderId: 'Test_Folder_Id'
            }
        }
    }
    ReactDOM.render(<BrowserRouter><NoteListMain {...props}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});