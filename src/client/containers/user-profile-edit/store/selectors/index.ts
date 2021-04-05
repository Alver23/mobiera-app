// Dependencies
import { createSelector } from 'reselect';

import { RootState } from '@mobiera/store/reducers';
import { userKey, IState } from '../reducers/index';

export const selectUserState = (state: RootState) => state[userKey];
export const selectStatus = createSelector(
  selectUserState,
  (state: IState) => state.status
);
export const selectMesasge = createSelector(
  selectUserState,
  (state: IState) => state.message
);
