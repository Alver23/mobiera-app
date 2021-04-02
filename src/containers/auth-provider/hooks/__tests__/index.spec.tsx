// Dependencies
import React, { Dispatch } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

// Under test file
import useAuth from '../index';

describe('Auth Provider Hooks', () => {
  describe('useAuth', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should get the data of an authenticated user', () => {
      const { result } = renderHook(() => useAuth());
      const [, logout] = result.current;
      expect(logout).toEqual(expect.any(Function));
    });

    it('should call the logout callback whe the user is authenticate', () => {
      const mockState: [unknown, Dispatch<unknown>] = [{}, jest.fn()];
      jest.spyOn(React, 'useState').mockReturnValue(mockState);
      const { result } = renderHook(() => useAuth());
      const [, logout] = result.current;
      act(() => {
        logout();
      });
      expect(mockState[1]).toHaveBeenCalled();
    });
  });
});
