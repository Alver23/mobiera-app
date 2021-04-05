// Dependencies
import React from 'react';
import * as yup from 'yup';
import { shallow, ShallowWrapper } from 'enzyme';
import { Controller } from 'react-hook-form';

// Under test file
import UserForm from '../index';

describe('<UserForm />', () => {
  let component: ShallowWrapper;
  const props = {
    onSubmit: jest.fn(),
    formSchema: yup.object().shape({
      name: yup.string().required(),
    }),
  };

  beforeEach(() => {
    component = shallow(<UserForm {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  describe('<Input />', () => {
    const cases = [
      ['name', 0],
      ['email', 1],
      ['password', 2],
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
        const { props: inputProps } = render({ field } as any);
        inputProps.onChangeText();
        inputProps.onBlur();
        if (inputProps.rightIcon?.props?.onPress) {
          inputProps.rightIcon?.props?.onPress();
        }
        expect(field.onBlur).toHaveBeenCalledTimes(1);
        expect(field.onChange).toHaveBeenCalledTimes(1);
      }
    );
  });
});
