// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Exceptions
import UnauthenticatedException from '../exceptions';

// Services
import ValidationService from '../validation-service';

// Under test file
import AuthenticationService from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('@mobiera/config', () => ({
  endpoints: { login: 'fake-url' },
}));
jest.mock('@mobiera/core/axios/internal-axios-instance', () => ({
  internalAxiosInstance: { post: jest.fn() },
}));

describe('AuthenticationService', () => {
  describe('login method', () => {
    const { userValid, userInvalid, userResponse } = mocks;
    const error = new UnauthenticatedException();

    beforeEach(() => {
      jest
        .spyOn(ValidationService, 'validateEmail')
        .mockImplementationOnce((fn) => fn)
        .mockImplementationOnce(() => {
          throw error;
        });

      jest
        .spyOn(ValidationService, 'validatePassword')
        .mockImplementation((fn) => fn);
      jest.spyOn(internalAxiosInstance, 'post').mockResolvedValue(userResponse);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should get the user data when user is valid', () => {
      const expected = (response: unknown) =>
        expect(response).toEqual(userResponse);
      return AuthenticationService.login(userValid).then(expected);
    });

    it('should get an exception', () => {
      const expected = (response: Error) => {
        expect(response.message).toBe(error.message);
      };
      return AuthenticationService.login(userInvalid).catch(expected);
    });
  });
});
