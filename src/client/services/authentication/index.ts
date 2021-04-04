// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Config
import config from '@mobiera/config';

// Connector
import Connector from '@mobiera/core/connector';

// Dto's
import UserResponse from '@mobiera/services/dto/user/response/user-response';

// Exceptions
import UnauthenticatedException from '@mobiera/services/authentication/exceptions';

// Commons
import objectToClass from '@mobiera/commons/plain-transformer';

// Interfaces
import { ILoginRequest, IUser } from './interfaces';

const { endpoints } = config;

class AuthenticationService {
  constructor(private readonly http: Connector) {}

  public login(params: ILoginRequest): Promise<IUser> {
    const url = endpoints.login;
    return new Promise((resolve, reject): void => {
      (async () => {
        const response = await this.http.get<IUser[]>(url, { params });
        const [user] = response;
        if (user) {
          resolve(objectToClass(UserResponse, user));
          return;
        }
        reject(new UnauthenticatedException());
      })();
    });
  }
}

const connectorInstance = new Connector(internalAxiosInstance);
export default new AuthenticationService(connectorInstance);
