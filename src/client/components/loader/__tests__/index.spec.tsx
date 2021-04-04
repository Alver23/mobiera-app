// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ActivityIndicator } from 'react-native';

// Under test file
import Loader from '../index';

describe('<Loader />', () => {
  let component: ShallowWrapper;
  const props = { isVisible: true };

  beforeEach(() => {
    component = shallow(<Loader {...props} />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(ActivityIndicator).exists()).toBeTruthy();
  });
});
