import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NotePageNav from '../Components/NotePageNav';

it('renders without crashing', () => {
    //create a div in which to render the component
    const div = document.createElement('div');
    //render the component, wrapper in BrowserRouter (as it is part of a Route) within the previously create div
    ReactDOM.render(<BrowserRouter><NotePageNav /></BrowserRouter>, div);
    //clean up the code by unmounting NotePageNav from the DOM
    ReactDOM.unmountComponentAtNode(div);
});