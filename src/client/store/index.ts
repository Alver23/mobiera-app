// Dependencies
import { StoreEnhancer } from 'redux';
import {
  ConfigureEnhancersCallback,
  configureStore,
  EnhancedStore,
} from '@reduxjs/toolkit';

// Reducers
import rootReducer from './reducers';

const enhancers: StoreEnhancer[] | ConfigureEnhancersCallback = [];

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('../core/tools/reactotron/config').then((response) =>
    enhancers.push(response.default.createEnhancer())
  );
}

const rootStore: EnhancedStore = configureStore({
  reducer: rootReducer,
  enhancers,
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;
