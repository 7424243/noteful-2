import ReactDOM from 'react-dom';
import ValidationError from '../Components/ValidationError';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
});