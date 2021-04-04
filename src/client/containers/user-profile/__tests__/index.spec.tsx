// Dependencies
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Linking } from 'react-native';

// Hooks
import * as AuthHooks from '@mobiera/containers/auth-provider/hooks';

// Interfaces
import IAuthContext from '@mobiera/containers/auth-provider/context/interfaces';

// Components
import UserAvatar from '../components/avatar';
import UserEmail from '../components/email';

// Under test file
import UserProfile from '../index';

// Mocks
import mocks from './mocks.json';

describe('<UserProfile />', () => {
  let component: ShallowWrapper;

  const callback = jest.fn().mockRejectedValue('fake error');
  const sessionMock: IAuthContext = {
    user: mocks,
    authenticated: false,
    initialize: false,
    logout: jest.fn(),
  };

  beforeEach(() => {
    Linking.openURL = callback;
    jest.spyOn(AuthHooks, 'useAuthSession').mockReturnValue(sessionMock);
    component = shallow(<UserProfile />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const { onPress, email } = component.find(UserEmail).props();
    const image = component.find(UserAvatar).prop('image');
    if (onPress) {
      onPress(email);
      expect(callback).toHaveBeenCalledTimes(1);
    }
    expect(image).toBe(sessionMock.user?.avatar);
  });
});
