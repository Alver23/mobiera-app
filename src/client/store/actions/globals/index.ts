// Dependencies
import { createAction } from '@reduxjs/toolkit';

const appShowLoaderAction = createAction<boolean>('APP_SHOW_LOADER');

export default appShowLoaderAction;
