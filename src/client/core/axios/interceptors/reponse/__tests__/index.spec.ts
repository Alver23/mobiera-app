// Under test file
import responseInterceptor from '../index';

describe('responseInterceptor', () => {
  it('should get the data from response', () => {
    const response = {
      data: { id: 1 },
      status: 200,
      statusText: 'Successfull',
      headers: {},
      config: {},
    };

    expect(responseInterceptor()(response)).toEqual(response.data);
  });
});
