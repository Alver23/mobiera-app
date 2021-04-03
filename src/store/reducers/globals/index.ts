// Dependencies
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

// Actions
import appShowLoaderAction from '@mobiera/store/actions/globals';

export interface IGlobalState {
  showLoader: boolean;
}

const initialState: IGlobalState = {
  showLoader: false,
};

export const globalFeatureKey = 'global';

const globalReducers = createReducer(initialState, {
  [appShowLoaderAction.type]: (
    state: IGlobalState,
    action: PayloadAction<boolean>
  ): IGlobalState => {
    return {
      ...state,
      showLoader: action.payload,
    };
  },
});

export default globalReducers;
