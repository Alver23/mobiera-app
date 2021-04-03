jest.mock('react-native-config', () => jest.fn());

jest.mock('react-native-restart', () => ({
  Restart: jest.fn(),
}));

jest.mock('react-native-sensitive-info', () => ({
  setItem: jest.fn(),
  deleteItem: jest.fn(),
  getItem: jest.fn(),
}));
