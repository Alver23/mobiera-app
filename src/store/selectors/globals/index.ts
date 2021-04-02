// Dependencies
import { createSelector } from 'reselect';

// Reducers
import { RootState } from '@mobiera/store/reducers';
import {
  globalFeatureKey,
  IGlobalState,
} from '@mobiera/store/reducers/globals';

export const selectGlobalState = (state: RootState) => state[globalFeatureKey];

export const selectAppLoader = createSelector(
  selectGlobalState,
  (state: IGlobalState) => state.showLoader
);
