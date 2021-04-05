// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import * as NavigationHooks from '@react-navigation/native';

// Under test file
import HomeScreen from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<HomeScreen />', () => {
  let component: ShallowWrapper;

  const navigation: any = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(NavigationHooks, 'useNavigation').mockReturnValue(navigation);
    component = shallow(<HomeScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(View).exists()).toBeTruthy();
  });

  it('should navigate to the screen edit user', () => {
    const onPress = component.find(Button).at(1).prop('onPress');
    onPress();

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });
});
