// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Under test file
import RegisterForm from '../index';

// Hooks
import * as signUpHooks from '../hooks';

describe('<RegisterForm />', () => {
  let component: ShallowWrapper;
  const signUpMock: [string, jest.Mock] = ['message', jest.fn()];

  beforeEach(() => {
    jest.spyOn(signUpHooks, 'default').mockReturnValue(signUpMock);
    component = shallow(<RegisterForm />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
