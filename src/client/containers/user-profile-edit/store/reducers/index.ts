/* eslint-disable no-param-reassign */
// Dependencies
import { createReducer } from '@reduxjs/toolkit';

// Commons
import LOADING_TYPES from '@mobiera/commons/app';

// Actions
import userUpdate, { userReset } from '../actions';

export interface IState {
  status: LOADING_TYPES;
  message: string;
}

const initialState: IState = {
  message: '',
  status: LOADING_TYPES.IDLE,
};

export const userKey = 'user';

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(userUpdate.pending, (state: IState) => {
    state.status = LOADING_TYPES.LOADING;
    state.message = '';
  });
  builder.addCase(userUpdate.fulfilled, (state: IState) => {
    state.status = LOADING_TYPES.SUCCEEDED;
    state.message = 'The user was updated successfully';
  });
  builder.addCase(userUpdate.rejected, (state: IState) => {
    state.status = LOADING_TYPES.FAILED;
    state.message = 'An error has occurred, please try again later';
  });
  builder.addCase(userReset, (state: IState) => {
    state.status = LOADING_TYPES.IDLE;
    state.message = '';
  });
});

export default userReducer;
