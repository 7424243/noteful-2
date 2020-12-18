import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteListNav from '../Components/NoteListNav';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NoteListNav /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});