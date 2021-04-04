// Dependencies
import { Expose } from 'class-transformer';

// Interfaces
import { IUser } from '@mobiera/services/authentication/interfaces';

class UserResponse implements IUser {
  @Expose() id: number;

  @Expose() name: string;

  @Expose() email: string;

  @Expose() avatar: string;
}

export default UserResponse;
