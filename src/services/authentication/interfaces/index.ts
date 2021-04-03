export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
}

export interface IValidationService {
  validateEmail(email: string): void;
  validatePassword(password: string): void;
}
