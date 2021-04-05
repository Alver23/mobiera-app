// Services
import UserServices from '@mobiera/services/user';

// Under test file
import userUpdate from '../index';

jest.mock('@mobiera/services/user', () => ({
  update: jest.fn().mockResolvedValue(null),
}));

describe('userUpdate Action', () => {
  it('should call the update method correctly', async () => {
    const dispatch = jest.fn();
    const action = userUpdate({ id: 1 } as any);
    await action(dispatch, jest.fn, undefined);
    expect(UserServices.update).toHaveBeenCalledTimes(1);
  });
});
