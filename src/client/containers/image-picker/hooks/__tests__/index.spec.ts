// Dependencies
import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

// Under test file
import useImagePicker from '../index';

describe('ImagePicker Hooks', () => {
  const refMock = { current: { show: jest.fn() } };

  beforeEach(() => {
    jest.spyOn(React, 'useRef').mockReturnValue(refMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get a reference of image picker', () => {
    const { result } = renderHook(() => useImagePicker());
    result.current[1]();
    expect(refMock.current.show).toHaveBeenCalledTimes(1);
  });
});
