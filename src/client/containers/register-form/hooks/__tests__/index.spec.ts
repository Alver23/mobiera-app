// Dependencies
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

// Hooks
import * as appHooks from '@mobiera/hooks/app-loader';

// Services
import UserServices from '@mobiera/services/user';

// Under test file
import useSignUp from '../index';

// Mocks
import mocks from './mocks.json';

describe('Register form hooks', () => {
  const callback = jest.fn();
  const stateMock: [boolean, () => void] = [false, jest.fn()];
  const appLoaderMock: [(show: boolean) => void] = [jest.fn()];

  beforeEach(() => {
    jest.spyOn(UserServices, 'save').mockResolvedValue(null);
    jest.spyOn(appHooks, 'default').mockReturnValue(appLoaderMock);
    jest.spyOn(React, 'useState').mockReturnValue(stateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should the save a new user', () => {
    const { result } = renderHook(() => useSignUp(callback));
    act(() => {
      result.current[1](mocks);
    });
    expect(appLoaderMock[0]).toHaveBeenCalledTimes(1);
  });

  it('should get an error when save a new user', () => {
    jest.spyOn(UserServices, 'save').mockRejectedValue(new Error('fake error'));
    const { result } = renderHook(() => useSignUp(callback));
    act(() => {
      result.current[1](mocks);
    });
    expect(appLoaderMock[0]).toHaveBeenCalledTimes(1);
  });
});
