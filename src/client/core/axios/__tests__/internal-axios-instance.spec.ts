// Under test file
import {
  internalAxiosInstance,
  InternalAxiosInstance,
} from '../internal-axios-instance';

describe('InternalAxiosInstance', () => {
  it('should get a instance of axios', () => {
    expect(internalAxiosInstance.defaults.headers).toBeTruthy();
  });

  it('should get a instance of axios without custom configuration', () => {
    expect(new InternalAxiosInstance()).toBeInstanceOf(InternalAxiosInstance);
  });
});
