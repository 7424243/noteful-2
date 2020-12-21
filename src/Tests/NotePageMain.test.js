import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageMain from '../Components/NotePageMain';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        match: {
            params: {
                noteId: 'Test_Note_Id'
            }
        },
        history: {
            push: jest.fn()
        }
    }
    ReactDOM.render(<BrowserRouter><NotePageMain {...props}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});