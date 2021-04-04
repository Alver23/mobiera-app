// Dependencies
import Config from 'react-native-config';

// Models
import { IConfig } from './interfaces';

const { API_BASE_URL } = Config;

const config: IConfig = {
  environment: Config.NODE_ENV,
  defaultTimeout: +Config.DEFAULT_TIMEOUT,
  endpoints: {
    login: `${API_BASE_URL}users`,
  },
};

export default config;
