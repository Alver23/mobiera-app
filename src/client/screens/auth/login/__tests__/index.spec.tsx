// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text, Button } from 'react-native-elements';
import * as NavigationHooks from '@react-navigation/native';

// Under test file
import Login from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<LoginScreen />', () => {
  let component: ShallowWrapper;

  const navigation: any = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(NavigationHooks, 'useNavigation').mockReturnValue(navigation);
    component = shallow(<Login />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });

  it('should navigate to the screen sign up', () => {
    const onPress = component.find(Button).prop('onPress');
    onPress();

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
