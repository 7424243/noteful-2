import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NoteListNav from '../Components/NoteListNav';

it('renders without crashing', () => {
    //create a div in which to render the Component
    const div = document.createElement('div');
    //render the component, wrapped in BrowserRouter(as it is part of a Route) within the previously created div
    ReactDOM.render(<BrowserRouter><NoteListNav /></BrowserRouter>, div);
    //clean up the code by unmounting NoteListNav from the DOM
    ReactDOM.unmountComponentAtNode(div);
});