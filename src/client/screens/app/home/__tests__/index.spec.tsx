// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';

// Under test file
import HomeScreen from '../index';

describe('<HomeScreen />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<HomeScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(View).exists()).toBeTruthy();
  });
});
