export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserService {
  save(payload: IUserRequest): Promise<null>;
}
