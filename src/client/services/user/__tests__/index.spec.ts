// Core
import { internalAxiosInstance } from '@mobiera/core/axios/internal-axios-instance';

// Under test file
import UserService from '../index';

// Mocks
import mocks from './mocks.json';

jest.mock('@mobiera/core/axios/internal-axios-instance', () => ({
  internalAxiosInstance: {
    post: jest.fn().mockResolvedValue(null),
    put: jest.fn().mockResolvedValue(null),
  },
}));

describe('UserServices', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should the save a new user', () => {
    const expected = () => {
      expect(internalAxiosInstance.post).toHaveBeenCalledTimes(1);
    };

    return UserService.save(mocks.saveReques).then(expected);
  });

  it('should the update an user', () => {
    const expected = () => {
      expect(internalAxiosInstance.put).toHaveBeenCalledTimes(1);
    };

    return UserService.update(1, mocks.updateRequest).then(expected);
  });
});
