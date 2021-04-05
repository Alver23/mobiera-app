// Commons
import LOADING_TYPES from '@mobiera/commons/app';

// Under test file
import userReducer from '../index';
import userUpdate, { userReset } from '../../actions';

describe('userReducer', () => {
  const initialState = {
    message: 'fake',
    status: LOADING_TYPES.IDLE,
  };

  describe('userUpdate', () => {
    const cases = [
      [
        userUpdate.pending,
        {
          message: '',
          status: LOADING_TYPES.LOADING,
        },
      ],
      [
        userUpdate.fulfilled,
        {
          message: 'The user was updated successfully',
          status: LOADING_TYPES.SUCCEEDED,
        },
      ],
      [
        userUpdate.rejected,
        {
          message: 'An error has occurred, please try again later',
          status: LOADING_TYPES.FAILED,
        },
      ],
      [
        userReset.type,
        {
          message: '',
          status: LOADING_TYPES.IDLE,
        },
      ],
    ];

    it.each(cases)('should call the action type %s', (type, expected) => {
      expect(userReducer(initialState, { type })).toEqual(expected);
    });
  });
});
