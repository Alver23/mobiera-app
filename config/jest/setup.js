// Dependencies
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import './app'

Enzyme.configure({ adapter: new Adapter() });
