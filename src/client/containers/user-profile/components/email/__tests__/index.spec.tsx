// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

// Under test file
import UserEmail from '../index';

describe('<UserEmail />', () => {
  let component: ShallowWrapper;
  const props = {
    email: 'fake@fake.com',
  };

  beforeEach(() => {
    component = shallow(<UserEmail {...props} />);
  });

  it('should save a snapshot of the component', () => {
    const onPress: any = component.find(TouchableOpacity).prop('onPress');
    if (onPress) {
      onPress();
    }
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const newProps = {
      ...props,
      onPress: jest.fn(),
    };
    component.setProps(newProps);
    const textLabel = component.find(Text).prop('children');
    const onPress: any = component.find(TouchableOpacity).prop('onPress');
    if (onPress) {
      onPress();
    }
    expect(textLabel).toBe(props.email);
    expect(newProps.onPress).toHaveBeenCalledWith(newProps.email);
  });
});
