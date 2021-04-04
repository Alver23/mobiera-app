// Dependencies
import { ReactNode } from 'react';

// Interfaces
import {
  IUserRequest,
  IUserUpdateRequest,
} from '@mobiera/services/user/interfaces';
import { IUser } from '@mobiera/services/authentication/interfaces';

export type IFormData = IUserUpdateRequest & IUserRequest;

export interface IUserFormProps {
  onSubmit: (values: IFormData) => void;
  defaultValues?: Partial<IUser>;
  formSchema: any;
  children?: ReactNode;
}
