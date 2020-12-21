import ReactDOM from 'react-dom';
import ValidationError from '../Components/ValidationError';

it('renders without crashing', () => {
    //create a div in which to render the component
    const div = document.createElement('div');
    //render the component within the previously created div
    ReactDOM.render(<ValidationError />, div);
    //clean up the code by unmounting ValidationError from the DOM
    ReactDOM.unmountComponentAtNode(div);
});