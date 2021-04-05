// Dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import userReducers, {
  userKey,
} from '@mobiera/containers/user-profile-edit/store/reducers';
import globalReducers, { globalFeatureKey } from './globals';

const rootReducer = combineReducers({
  [globalFeatureKey]: globalReducers,
  [userKey]: userReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
