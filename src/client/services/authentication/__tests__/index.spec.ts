// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Exceptions
import UserResponse from '@mobiera/services/dto/user/response/user-response';
import UnauthenticatedException from '../exceptions';

// Under test file
import AuthenticationService from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('@mobiera/config', () => ({
  endpoints: { login: 'fake-url' },
}));
jest.mock('@mobiera/core/axios/internal-axios-instance', () => ({
  internalAxiosInstance: { get: jest.fn() },
}));

describe('AuthenticationService', () => {
  describe('login method', () => {
    const { userRequest, userResponse } = mocks;
    const error = new UnauthenticatedException();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should get the user data when user is valid', () => {
      jest
        .spyOn(internalAxiosInstance, 'get')
        .mockResolvedValue([userResponse]);
      const expected = (response: unknown) =>
        expect(response).toBeInstanceOf(UserResponse);
      return AuthenticationService.login(userRequest).then(expected);
    });

    it('should get an exception', () => {
      jest.spyOn(internalAxiosInstance, 'get').mockResolvedValue([]);
      const expected = (response: Error) => {
        expect(response.message).toBe(error.message);
      };
      return AuthenticationService.login(userRequest).catch(expected);
    });
  });
});
