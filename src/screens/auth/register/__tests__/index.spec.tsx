// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Text, Button } from 'react-native-elements';
import * as NavigationHooks from '@react-navigation/native';

// Under test file
import RegisterScreen from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<RegisterScreen />', () => {
  let component: ShallowWrapper;
  const navigation: any = {
    goBack: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(NavigationHooks, 'useNavigation').mockReturnValue(navigation);
    component = shallow(<RegisterScreen />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });

  it('should go to the back', () => {
    const onPress = component.find(Button).prop('onPress');
    onPress();

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
