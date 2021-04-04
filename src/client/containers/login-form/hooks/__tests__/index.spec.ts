// Dependencies
import { renderHook, act } from '@testing-library/react-hooks';

// Hooks
import * as appHooks from '@mobiera/hooks/app-loader';
import * as stateHooks from '@mobiera/hooks/state-action';

// Services
import authenticationService from '@mobiera/services/authentication';

// Commons
import * as authCommons from '@mobiera/containers/login-form/commons';

// Under rest file
import useAuthentication from '../index';

// Mocks
import mocks from './mocks.json';

describe('LoginForm Hooks', () => {
  const appLoaderMock: [(show: boolean) => void] = [jest.fn()];
  const stateActionMock: [boolean, () => void, () => void] = [
    false,
    jest.fn(),
    jest.fn(),
  ];

  beforeEach(() => {
    jest.spyOn(authenticationService, 'login').mockResolvedValue(mocks.user);

    jest.spyOn(appHooks, 'default').mockReturnValue(appLoaderMock);

    jest.spyOn(stateHooks, 'default').mockReturnValue(stateActionMock);

    jest.spyOn(authCommons, 'setAuthData').mockResolvedValue(null);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should authenticate successfully', () => {
    const { result } = renderHook(() => useAuthentication());
    act(() => {
      result.current[1](mocks.userPayload);
    });
    expect(appLoaderMock[0]).toHaveBeenCalledTimes(1);
  });

  it('should get an error when authenticating', () => {
    jest
      .spyOn(authenticationService, 'login')
      .mockRejectedValue(new Error('fake errpr'));
    const { result } = renderHook(() => useAuthentication());
    act(() => {
      result.current[1](mocks.userPayload);
    });
    expect(appLoaderMock[0]).toHaveBeenCalled();
  });
});
