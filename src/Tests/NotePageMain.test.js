import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageMain from '../Components/NotePageMain';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NotePageMain /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});