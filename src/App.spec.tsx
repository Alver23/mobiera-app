// Dependencies
import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';

// Containers
import App from '@mobiera/App';

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
