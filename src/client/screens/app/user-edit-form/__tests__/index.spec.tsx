// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button, Text } from 'react-native-elements';
import * as NavigationHooks from '@react-navigation/native';

// Under test file
import UserEditForm from '../index';

// Mocks
jest.mock('@react-navigation/native');

describe('<UserEditForm />', () => {
  let component: ShallowWrapper;

  const navigation: any = {
    goBack: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(NavigationHooks, 'useNavigation').mockReturnValue(navigation);
    component = shallow(<UserEditForm />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    expect(component.find(Text).exists()).toBeTruthy();
  });

  it('should navigate to the screen edit user', () => {
    const onPress = component.find(Button).prop('onPress');
    onPress();

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
