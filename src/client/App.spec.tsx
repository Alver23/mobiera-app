// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Containers
import App from '@mobiera/App';

// Mocks
jest.mock('./store', () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  return store;
});
jest.mock('react-redux', () => ({
  Provider: jest.fn(),
}));
jest.mock('@mobiera/containers/app', () => jest.fn());
jest.mock('@mobiera/containers/auth-provider', () => jest.fn());
jest.mock('./core/tools/reactotron', () => jest.fn());

describe('App Component', () => {
  let component: ShallowRendererProps;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should save a snapshot of the component', () => {
    expect(component).toMatchSnapshot();
  });
});
