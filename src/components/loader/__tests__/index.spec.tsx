// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ActivityIndicator } from 'react-native';

// Components
import StatusBar from '@mobiera/components/status-bar';

// Under test file
import Loader from '../index';

describe('<Loader />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Loader />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(ActivityIndicator).exists()).toBeTruthy();
    expect(component.find(StatusBar).exists()).toBeTruthy();
  });
});
