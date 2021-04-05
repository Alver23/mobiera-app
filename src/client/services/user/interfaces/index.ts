export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserUpdateRequest extends IUserRequest {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface IUserService {
  save(payload: IUserRequest): Promise<null>;
  update(id: number, payload: IUserUpdateRequest): Promise<null>;
}
