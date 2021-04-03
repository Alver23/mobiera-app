// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

// Under test file
import { setAuthData, clearAuthData, getAuthData } from '../index';

describe('LoginForm commons', () => {
  const mockData = { id: 1, name: 'fake', username: 'fake' };

  describe('getAuthData method', () => {
    it('should get the user data from local storage', () => {
      jest
        .spyOn(RNSensitiveInfo, 'getItem')
        .mockResolvedValue(JSON.stringify(mockData));
      return getAuthData().then((response) => {
        expect(response).toEqual(mockData);
      });
    });

    it('should get token when not exist data in the local storage', () => {
      jest.spyOn(RNSensitiveInfo, 'getItem').mockResolvedValue('');
      return getAuthData().then((response) => {
        expect(response).toBeFalsy();
      });
    });
  });

  describe('setAuthData method', () => {
    it('should set user data', () => {
      const spy = jest
        .spyOn(RNSensitiveInfo, 'setItem')
        .mockResolvedValue(null);
      return setAuthData(mockData).then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('clearAuthData method', () => {
    it('should clear user data', () => {
      const spy = jest
        .spyOn(RNSensitiveInfo, 'deleteItem')
        .mockResolvedValue(null);
      return clearAuthData().then(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
