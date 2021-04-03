// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Config
import config from '@mobiera/config';

// Connector
import Connector from '@mobiera/core/connector';

// Services
import ValidationService from './validation-service';

// Interfaces
import { ILoginRequest, IUser, IValidationService } from './interfaces';

const { endpoints } = config;

class AuthenticationService {
  constructor(
    private readonly http: Connector,
    private readonly validationService: IValidationService
  ) {}

  public login(payload: ILoginRequest): Promise<IUser> {
    const url = endpoints.login;
    return new Promise((resolve, reject): void => {
      try {
        this.validationService.validateEmail(payload.email);
        this.validationService.validatePassword(payload.password);
        this.http.post<IUser>(url, payload).then(resolve).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }
}

const connectorInstance = new Connector(internalAxiosInstance);
export default new AuthenticationService(connectorInstance, ValidationService);
