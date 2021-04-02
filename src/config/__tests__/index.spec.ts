// Under test file
import config from '../index';

describe('Config', () => {
  it('should get the configuration of project', () => {
    expect(config).toEqual(expect.any(Object));
  });
});
