// Dependencies
import * as ReactRedux from 'react-redux';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Hooks
import * as authHooks from '@mobiera/containers/auth-provider/hooks';

// Navigation
import AppStack from '@mobiera/navigation/app-stack';
import AuthStack from '@mobiera/navigation/auth-stack';

// Under test file
import AppContainer from '../index';

// Mocks
jest.mock('@mobiera/navigation/auth-stack', () => jest.fn());
jest.mock('@mobiera/navigation/app-stack', () => jest.fn());

describe('AppContainer', () => {
  let component: ShallowWrapper;
  const callback = jest.fn();

  beforeEach(() => {
    jest.spyOn(ReactRedux, 'useSelector').mockReturnValue(callback);
    component = shallow(<AppContainer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show AppStack navigation when the user is authenticated', () => {
    jest
      .spyOn(authHooks, 'useAuthSession')
      .mockReturnValue({ authenticated: true, initialize: false });
    component.setProps({});
    expect(component.find(AppStack).exists()).toBeTruthy();
  });

  it('should show AuthStack navigation when the user is not authenticated', () => {
    jest
      .spyOn(authHooks, 'useAuthSession')
      .mockReturnValue({ authenticated: false, initialize: false });
    component.setProps({});
    expect(component.find(AuthStack).exists()).toBeTruthy();
  });
});
