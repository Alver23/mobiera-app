// Dependencies
import 'reflect-metadata';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import './app';
import './react-navigation';
import './async-storage';

Enzyme.configure({ adapter: new Adapter() });
