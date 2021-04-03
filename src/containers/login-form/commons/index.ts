// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

import { IAuthData } from '../interfaces';

export const AUTH_KEY = 'auth-data';

export const setAuthData = (data: IAuthData): Promise<null> => {
  return RNSensitiveInfo.setItem(AUTH_KEY, JSON.stringify(data), {});
};

export const getAuthData = async (): Promise<IAuthData> => {
  const data = await RNSensitiveInfo.getItem(AUTH_KEY, {});
  return data && JSON.parse(data);
};

export const clearAuthData = (): Promise<null> => {
  return RNSensitiveInfo.deleteItem(AUTH_KEY, {});
};
