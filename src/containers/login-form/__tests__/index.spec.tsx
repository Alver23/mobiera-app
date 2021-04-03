// Dependencies
import React from 'react';
import { Text, Button } from 'react-native-elements';
import { shallow, ShallowWrapper } from 'enzyme';
import { Controller } from 'react-hook-form';

// Under test file
import LoginForm from '../index';

// Hooks
import * as authenticationHooks from '../hooks';

describe('<LoginForm />', () => {
  let component: ShallowWrapper;
  const authenticationMock: [boolean, jest.Mock] = [true, jest.fn()];

  beforeEach(() => {
    jest
      .spyOn(authenticationHooks, 'default')
      .mockReturnValue(authenticationMock);
    component = shallow(<LoginForm />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call the onSubmit method but should return error', async () => {
    await component.find(Button).prop('onPress')();
    expect(component.find(Text).exists()).toBeTruthy();
  });

  describe('<Input />', () => {
    const cases = [
      ['email', 0],
      ['password', 1],
    ];

    it.each(cases)(
      'should render the form inputs when the field is %s',
      (_field, index) => {
        const render = component
          .find(Controller)
          .at(+index)
          .prop('render');
        const field = {
          onChange: jest.fn(),
          onBlur: jest.fn(),
          value: 'fake',
        };
        const { props } = render({ field } as any);
        props.onChangeText();
        props.onBlur();
        if (props.rightIcon?.props?.onPress) {
          props.rightIcon?.props?.onPress();
        }
        expect(field.onBlur).toHaveBeenCalledTimes(1);
        expect(field.onChange).toHaveBeenCalledTimes(1);
      }
    );
  });
});
