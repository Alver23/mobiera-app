// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text } from 'react-native-elements';

// Under test file
import Login from '../index';

describe('<LoginScreen />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Login />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });
});
