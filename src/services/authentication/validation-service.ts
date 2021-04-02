// Config
import config from '@mobiera/config';

// Exceptions
import UnauthenticatedException from './exceptions';

// Interfaces
import { IValidationService } from './interfaces';

const { authCredentials } = config;

class ValidationService implements IValidationService {
  validateEmail(email: string): void {
    if (email !== authCredentials.email) {
      throw new UnauthenticatedException();
    }
  }

  validatePassword(password: string): void {
    if (password !== authCredentials.password) {
      throw new UnauthenticatedException();
    }
  }
}

export default new ValidationService();
