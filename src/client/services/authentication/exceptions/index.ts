export default class UnauthenticatedException extends Error {
  constructor(
    public message: string = 'Unauthorized',
    public code: number = 401,
    public statusCode: number = 401
  ) {
    super();
  }
}
