// Dependencies
import Config from 'react-native-config';

// Models
import { IConfig } from './interfaces';

const config: IConfig = {
  environment: Config.NODE_ENV,
  defaultTimeout: parseInt(Config.DEFAULT_TIMEOUT, 10),
};

export default config;
