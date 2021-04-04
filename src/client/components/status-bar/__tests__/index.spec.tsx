// Dependencies
import React from 'react';
import * as RNModules from 'react-native';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import StatusBarComponent from '../index';

describe('<StatusBar />', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<StatusBarComponent />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(RNModules.StatusBar).exists()).toBeTruthy();
  });

  it('should render correctly when dark mode is true', () => {
    jest.spyOn(RNModules, 'useColorScheme').mockReturnValue('dark');
    component.setProps({});
    const barStyle = component.find(RNModules.StatusBar).prop('barStyle');
    expect(barStyle).toBe('light-content');
  });
});
