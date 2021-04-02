// Dependencies
import { configureStore } from '@reduxjs/toolkit';

const enhancers: any = [];

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('../core/tools/reactotron/config').then(response =>
    enhancers.push(response.default.createEnhancer())
  );
}

const rootStore = configureStore({ reducer: {}, enhancers });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;
