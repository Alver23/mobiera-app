// Dependencies
import Config from 'react-native-config';

// Models
import { IConfig } from './interfaces';

const config: IConfig = {
  environment: Config.NODE_ENV,
  defaultTimeout: +Config.DEFAULT_TIMEOUT,
};

export default config;