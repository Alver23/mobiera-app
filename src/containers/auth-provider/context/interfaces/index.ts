export default interface IAuthContext {
  authenticated: boolean;
  initialize: boolean;
  logout?: () => void;
}
