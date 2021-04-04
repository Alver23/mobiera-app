// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import globalReducers, { globalFeatureKey } from './globals';

const rootReducer = combineReducers({
  [globalFeatureKey]: globalReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
