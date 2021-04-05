// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Interfaces
import IAuthContext from '@mobiera/containers/auth-provider/context/interfaces';

// Hooks
import * as AuthHooks from '@mobiera/containers/auth-provider/hooks';
import * as useUserUpdateHooks from '../hooks';

// Under test file
import UserProfileEdit from '../index';

// Mocks
import mocks from './mocks.json';

describe('<UserProfileEdit />', () => {
  let component: ShallowWrapper;
  const props = {
    goBack: jest.fn(),
  };
  const sessionMock: IAuthContext = {
    user: mocks,
    authenticated: false,
    initialize: false,
    logout: jest.fn(),
  };
  const signUpMock: [string, jest.Mock] = ['message', jest.fn()];

  beforeEach(() => {
    jest.spyOn(AuthHooks, 'useAuthSession').mockReturnValue(sessionMock);
    jest.spyOn(useUserUpdateHooks, 'default').mockReturnValue(signUpMock);
    component = shallow(<UserProfileEdit {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
