// Dependencies
import React, { Dispatch } from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Commons
import * as AuthCommons from '@mobiera/containers/login-form/commons';

// Under test file
import useAuth, { useAuthSession } from '../index';

describe('Auth Provider Hooks', () => {
  const userMock = { id: 1, name: 'fake name', email: 'fake', avatar: '' };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('useAuth', () => {
    it('should get the data of an authenticated user', async () => {
      jest.spyOn(AuthCommons, 'getAuthData').mockResolvedValue(userMock);
      const { result, waitForNextUpdate } = renderHook(() => useAuth());
      await waitForNextUpdate();
      const [{ user }, logout] = result.current;
      expect(user).toEqual(userMock);
      expect(logout).toEqual(expect.any(Function));
    });

    it('should get an error when the user not exist and initialize state', () => {
      const mockState: [unknown, Dispatch<unknown>] = [null, jest.fn()];
      jest
        .spyOn(AuthCommons, 'getAuthData')
        .mockRejectedValue(new Error('fake error'));
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const { result } = renderHook(() => useAuth());
      expect(result.current).toEqual(
        expect.arrayContaining([null, expect.any(Function)])
      );
    });

    it('should get an error when the user not exist and not initialize state', () => {
      const mockState: [unknown, Dispatch<unknown>] = [{}, jest.fn()];
      jest
        .spyOn(AuthCommons, 'getAuthData')
        .mockRejectedValue(new Error('fake error'));
      jest.spyOn(React, 'useRef').mockReturnValue({ current: false });
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      renderHook(() => useAuth());
      expect(mockState[1]).not.toHaveBeenCalled();
    });

    it('should get the data of an authenticated user when the component is not mounted', () => {
      const mockState: [unknown, Dispatch<unknown>] = [{}, jest.fn()];
      jest.spyOn(AuthCommons, 'getAuthData').mockResolvedValue(userMock);
      jest.spyOn(React, 'useRef').mockReturnValue({ current: false });
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      renderHook(() => useAuth());
      expect(mockState[1]).not.toHaveBeenCalled();
    });

    it('should call the logout callback when the user is authenticate', () => {
      const mockState: [unknown, Dispatch<unknown>] = [{}, jest.fn()];
      jest.spyOn(AuthCommons, 'getAuthData').mockResolvedValue(userMock);
      jest.spyOn(AuthCommons, 'clearAuthData').mockResolvedValue(null);
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const {
        result: { current },
      } = renderHook(() => useAuth());
      const [, logout] = current;
      logout();
      expect(mockState[1]).toHaveBeenCalled();
    });

    it('should call the updateData', () => {
      const mockState: [unknown, Dispatch<unknown>] = [
        {},
        jest.fn().mockImplementation((fn) => fn()),
      ];
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const {
        result: { current },
      } = renderHook(() => useAuth());
      const [, , updateData] = current;
      updateData({});
      expect(mockState[1]).toHaveBeenCalled();
    });
  });

  describe('useAuthSession', () => {
    it('should get context for authentication', () => {
      const mockData = { user: { name: 'fake name' } };
      jest.spyOn(React, 'useContext').mockReturnValue(mockData);
      const { result } = renderHook(() => useAuthSession());
      expect(result.current).toEqual(mockData);
    });
  });
});
