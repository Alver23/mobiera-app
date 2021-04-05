// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Interfaces
import IAuthContext from '@mobiera/containers/auth-provider/context/interfaces';

// Containers
import UserForm from '@mobiera/containers/user-form';

// Hooks
import * as AuthHooks from '@mobiera/containers/auth-provider/hooks';

// Under test file
import UserProfileEdit from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn().mockResolvedValue((fn) => fn()),
}));

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
    updateData: jest.fn(),
  };

  let cleanupFunc: any;

  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((callback) => {
      cleanupFunc = callback();
    });
    jest.spyOn(AuthHooks, 'useAuthSession').mockReturnValue(sessionMock);
    component = shallow(<UserProfileEdit {...props} />);
  });

  afterEach(() => {
    cleanupFunc();
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    const onSubmit = component.find(UserForm).prop('onSubmit');
    onSubmit(mocks);
    expect(component).toMatchSnapshot();
  });
});
