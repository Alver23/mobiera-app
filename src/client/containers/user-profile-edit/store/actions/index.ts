// Dependencies
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

// Interfaces
import { IFormData } from '@mobiera/containers/user-form/interfaces';

// Services
import UserServices from '@mobiera/services/user';

const userUpdate = createAsyncThunk(
  'user/update',
  async (payload: IFormData) => {
    const { id } = payload;
    const response = await UserServices.update(id, payload);
    return response;
  }
);

export const userReset = createAction('user/reset');

export default userUpdate;
