// Dependencies
import { IUser } from '@mobiera/services/authentication/interfaces';

export default interface IAuthContext {
  authenticated: boolean;
  initialize: boolean;
  user?: IUser;
  logout?: () => void;
}
