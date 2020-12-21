import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageMain from '../Components/NotePageMain';

it('renders without crashing', () => {
    //create a div in which to render the component
    const div = document.createElement('div');
    //define fake testing data for this.props.math.params.noteId and this.props.history.push (both of which are required in the component)
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
    //render the component with props, wrapped in BrowserRouter (as it is part of a Route), inside the previously created div.
    ReactDOM.render(<BrowserRouter><NotePageMain {...props}/></BrowserRouter>, div);
    //clean up the code by unmounting NotePageMain from the DOM.
    ReactDOM.unmountComponentAtNode(div);
});