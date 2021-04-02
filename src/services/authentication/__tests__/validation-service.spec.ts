// Exceptions
import UnauthenticatedException from '@mobiera/services/authentication/exceptions';

// Mocks
import mocks from './mocks.json';

// Under test file
import ValidationService from '../validation-service';

describe('ValidationService', () => {
  const { userValid, userInvalid } = mocks;

  describe('validateEmail method', () => {
    it('should get an email valid', () => {
      expect(() => {
        ValidationService.validateEmail(userValid.email);
      }).not.toThrow(UnauthenticatedException);
    });

    it('should get an exception', () => {
      expect(() => {
        ValidationService.validateEmail(userInvalid.email);
      }).toThrow(UnauthenticatedException);
    });
  });

  describe('validatePassword method', () => {
    it('should get a password valid', () => {
      expect(() => {
        ValidationService.validatePassword(userValid.password);
      }).not.toThrow(UnauthenticatedException);
    });

    it('should get an exception', () => {
      expect(() => {
        ValidationService.validatePassword(userInvalid.password);
      }).toThrow(UnauthenticatedException);
    });
  });
});
