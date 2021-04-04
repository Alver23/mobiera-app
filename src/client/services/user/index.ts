// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Interfaces
import { IUserService, IUserRequest } from '@mobiera/services/user/interfaces';

// Config
import config from '@mobiera/config';

// Connector
import Connector from '@mobiera/core/connector';

const { endpoints } = config;

class UserService implements IUserService {
  constructor(private readonly http: Connector) {}

  save(payload: IUserRequest): Promise<null> {
    const url = endpoints.user;
    return this.http.post(url, payload);
  }
}

const connectorInstance = new Connector(internalAxiosInstance);

export default new UserService(connectorInstance);
