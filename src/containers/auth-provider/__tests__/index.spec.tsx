// Dependencies
import React, { PropsWithChildren, ReactElement } from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

// Components
import Loader from '@mobiera/components/loader';

// Inrterfaces
import IAuthContext from '../context/interfaces';

// Hooks
import * as hooks from '../hooks';

// Under test file
import AuthProvider from '../index';

describe('AuthProvider', () => {
  let component: ShallowWrapper<PropsWithChildren<any>>;

  const FakeComponent = (): ReactElement => <></>;

  beforeEach(() => {
    component = shallow(
      <AuthProvider>
        <FakeComponent />
      </AuthProvider>
    );
  });

  it('should render correctly when not initialize authentication', () => {
    expect(component.find(Loader).exists()).toBeTruthy();
  });

  it('should save a snapshot of the component', () => {
    const initialState = { initialize: true, authenticated: false };
    const mockState: [IAuthContext, () => void] = [initialState, jest.fn()];
    jest.spyOn(hooks, 'default').mockReturnValue(mockState);
    component.setProps({});
    const {
      children: { type },
    } = component.props();
    expect(type()).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
