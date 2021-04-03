// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';

export interface IFormData {
  email: string;
  password: string;
}

export type IAuthData = IUser;
